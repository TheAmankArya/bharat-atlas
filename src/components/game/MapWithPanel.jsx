import MapCanvas from "../map/MapCanvas";

/**
 * Map and answer panel as two separate, non-overlapping regions — side-by-side once
 * there's room (lg+), stacked with the map on top on narrower screens. Previously the
 * panel floated on top of the map as an absolute-positioned overlay, which could hide a
 * large part of it (especially a tall FeedbackCard) right when you want to see exactly
 * where the answer is. The map is never covered now, and stays pannable throughout.
 */
export default function MapWithPanel({ mapProps, children }) {
  return (
    <div className="flex min-h-full w-full flex-col lg:h-full lg:flex-row">
      <div className="h-[52vh] w-full shrink-0 lg:h-full lg:min-w-0 lg:flex-1">
        <MapCanvas {...mapProps} />
      </div>
      <div className="panel-center-safe w-full shrink-0 border-line p-4 dark:border-white/10 sm:p-6 lg:h-full lg:w-[26rem] lg:shrink-0 lg:overflow-y-auto lg:border-l">
        {children}
      </div>
    </div>
  );
}
