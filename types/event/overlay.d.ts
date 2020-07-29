/**
 * @file tab
 */

declare namespace tinyapp.overlay {
  /**
   * 弹层请求关闭时触发事件的回调函数
   */
  interface IRequestCloseEvent extends tinyapp.ICustomEvent {}

  /**
   * 弹层打开时触发事件的回调函数
   */
  interface IOpenEvent extends tinyapp.ICustomEvent {}

  /**
   * 弹层关闭时触发事件的回调函数
   */
  interface ICloseEvent extends tinyapp.ICustomEvent {}

  /**
   *  弹层定位完成时触发的事件
   */
  interface IPositionEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: Readonly<{
        /**
         *  对齐方式
         *
         *  如 ['tl', 'bl']（如果开启 needAdjust，可能和预先设置的 align 不同）
         */
        align: [string, string];
        /**
         * 距离视口左侧距离
         */
        left: number;
        /**
         *  距离视口顶部距离
         */
        top: number;
      }>;
    };
  }
}
