/// <reference path="./button/index.d.ts" />
/// <reference path="./cache/index.d.ts" />
/// <reference path="./data/index.d.ts" />
/// <reference path="./device/index.d.ts" />
/// <reference path="./media/index.d.ts" />
/// <reference path="./open/index.d.ts" />
/// <reference path="./ui/index.d.ts" />
/// <reference path="./webview/webview.d.ts" />

declare namespace my {
  interface IBoundingClientRect {
    width: number;
    height: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  type ScrollOffset = Record<"scrollTop" | "scrollLeft", number>;

  type SelectorResult = ReadonlyArray<
    null | Readonly<IBoundingClientRect> | Readonly<ScrollOffset>
  >;

  type ISelectorExecCallback = (ret: SelectorResult) => void;

  interface ISelectorQuery {
    select(selector: string): ISelectorQuery;
    selectAll(selector: string): ISelectorQuery;
    selectViewport(): ISelectorQuery;
    boundingClientRect(): ISelectorQuery;
    scrollOffset(): ISelectorQuery;
    exec(ret: ISelectorExecCallback): void;
  }

  function createSelectorQuery(params?: Record<string, any>): ISelectorQuery;

  const isIDE: boolean;
}
