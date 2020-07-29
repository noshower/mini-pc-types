/**
 * @file text
 */

declare namespace tinyapp.text {
  /**
   * 点击
   */
  interface ITapEvent extends tinyapp.ICustomEvent {
    readonly detail: Readonly<{
      clientX: number;
      clientY: number;
      pageX: number;
      pageY: number;
    }>;
  }
}
