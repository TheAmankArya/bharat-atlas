import { useCallback, useMemo, useRef, useState } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";
import { geoPath } from "d3-geo";
import { motion } from "framer-motion";

const DEFAULT_ZOOM_STATE = { center: [82.8, 22.5], zoom: 1 };

/**
 * Generic boundary-map renderer, shared across every atlas module — it has no
 * India-specific (or any other region's) knowledge baked in. Callers supply their own
 * geography via `mapGeo`: `{ getStateFeatures, projection, width, height }`, where
 * `projection` is a d3-geo projection already fitted to `width`/`height` (see
 * src/modules/bharat/engine/geo.js for Bharat's instance). A future Bihar module would
 * pass its own district-level geo the same way, with zero changes needed here.
 *
 * Click detection asks the ZoomableGroup's own inner transformed `<g>` for its
 * screen->local-space CTM (getScreenCTM) — react-simple-maps forwards a `ref` on
 * ZoomableGroup straight to that `<g transform="translate(...) scale(...)">` node, so its
 * CTM already bakes in the CURRENT pan/zoom. Reading the CTM from the outer `<svg>` instead
 * would miss that inner transform entirely: it's a no-op at the exact default zoom/center
 * (so desktop testing never caught it), but wrong the moment a user pans or pinch-zooms —
 * which is exactly what real touchscreen use does constantly and a mouse rarely does.
 */
export default function MapCanvas({
  mapGeo,
  onMapClick,
  disabled = false,
  highlightStateName = null,
  highlightStatus = null, // "correct" | "wrong" | null — tints the highlighted region
  revealLocation = null, // point-based location to pin once an answer has been submitted
  userClickPoint = null, // where the user actually clicked, shown on a wrong answer
  focusCenter = null, // [lng, lat] — initial ZoomableGroup center, e.g. to "jump to" a search result
  focusZoom = null, // initial zoom level paired with focusCenter
  ariaLabel = "Interactive map",
}) {
  const { getStateFeatures, projection, width, height } = mapGeo;
  const svgRef = useRef(null);
  const zoomedGroupRef = useRef(null);
  const [zoomState, setZoomState] = useState(
    focusCenter ? { center: focusCenter, zoom: focusZoom ?? 4 } : DEFAULT_ZOOM_STATE
  );
  // Same projection MapCanvas already renders with, so a traced course (e.g. a river's
  // `path`) lines up exactly with the boundaries and markers — no separate coordinate math.
  const pathGenerator = useMemo(() => geoPath(projection), [projection]);
  const routeCoordinates = revealLocation?.path?.map((p) => [p.lng, p.lat]);

  const handleClick = useCallback(
    (event) => {
      if (disabled || !onMapClick) return;
      const svg = svgRef.current;
      const zoomedGroup = zoomedGroupRef.current;
      if (!svg || !zoomedGroup) return;

      const ctm = zoomedGroup.getScreenCTM();
      if (!ctm) return;

      const point = svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const local = point.matrixTransform(ctm.inverse());

      const [lng, lat] = projection.invert([local.x, local.y]);
      onMapClick({ lat, lng });
    },
    [disabled, onMapClick, projection]
  );

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl" style={{ backgroundColor: "var(--color-map-bg)" }}>
      <ComposableMap
        ref={svgRef}
        projection={projection}
        width={width}
        height={height}
        onClick={handleClick}
        className={`h-full w-full ${disabled ? "cursor-default" : "cursor-crosshair"}`}
        role="img"
        aria-label={ariaLabel}
      >
        <ZoomableGroup
          ref={zoomedGroupRef}
          center={zoomState.center}
          zoom={zoomState.zoom}
          minZoom={1}
          maxZoom={8}
          onMoveEnd={(position) => setZoomState({ center: position.coordinates, zoom: position.zoom })}
        >
          <Geographies geography={{ type: "FeatureCollection", features: getStateFeatures() }}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = geo.properties.name === highlightStateName;
                const highlightFill =
                  highlightStatus === "correct"
                    ? "var(--color-correct)"
                    : highlightStatus === "wrong"
                      ? "var(--color-wrong)"
                      : "var(--color-brand-400)";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: isHighlighted ? highlightFill : "var(--color-map-default)",
                        stroke: "var(--color-map-stroke)",
                        strokeWidth: 0.6,
                        outline: "none",
                        transition: "fill 200ms ease",
                      },
                      hover: {
                        fill: isHighlighted ? highlightFill : "var(--color-map-hover)",
                        stroke: "var(--color-map-stroke)",
                        strokeWidth: 0.6,
                        outline: "none",
                      },
                      pressed: {
                        fill: isHighlighted ? highlightFill : "var(--color-map-pressed)",
                        stroke: "var(--color-map-stroke)",
                        strokeWidth: 0.6,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {routeCoordinates && (
            <>
              {/* Halo/casing stroke underneath — keeps the route visible against any
                  underlying fill (light-mode land, a highlighted state, other borders). */}
              <motion.path
                d={pathGenerator({ type: "LineString", coordinates: routeCoordinates })}
                fill="none"
                stroke="var(--color-route-halo)"
                strokeWidth={6.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <motion.path
                d={pathGenerator({ type: "LineString", coordinates: routeCoordinates })}
                fill="none"
                stroke={highlightStatus === "wrong" ? "var(--color-wrong)" : "var(--color-correct)"}
                strokeWidth={3.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </>
          )}

          {revealLocation && (
            <Marker coordinates={[revealLocation.coordinates.lng, revealLocation.coordinates.lat]}>
              <motion.circle
                r={5}
                fill={highlightStatus === "wrong" ? "var(--color-wrong)" : "var(--color-correct)"}
                stroke="#fff"
                strokeWidth={1.5}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.8, 1], opacity: 1 }}
                transition={{ duration: 1.1, repeat: Infinity }}
              />
            </Marker>
          )}

          {userClickPoint && highlightStatus === "wrong" && (
            <Marker coordinates={[userClickPoint.lng, userClickPoint.lat]}>
              <motion.circle
                r={4}
                fill="none"
                stroke="var(--color-wrong)"
                strokeWidth={1.5}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.9 }}
              />
            </Marker>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
