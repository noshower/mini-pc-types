/**
 * @file popup
 */

declare namespace tinyapp.popup {
  /**
   * 弹层显示或隐藏时触发的回调函数
   */
  interface IVisibleChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      /**
       * 弹层是否显示
       */
      readonly value: boolean;
    };
  }
}
