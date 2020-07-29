/**
 * @file balloon
 */

declare namespace tinyapp.balloon {
  /**
   * 弹层在显示和隐藏触发的事件
   */
  interface IVisibleChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: Readonly<{
      /**
       * 弹层是否隐藏和显示
       */
      value: boolean;
      /**
       * 触发弹层显示或隐藏的来源，
       *
       * closeClick 表示由自带的关闭按钮触发；
       *
       * fromTrigger 表示由trigger的点击触发；
       *
       * docClick 表示由document的点击触发
       */
      values: [boolean, 'fromTrigger' | 'docClick' | 'closeClick'];
    }>;
  }

  /**
   * 任何visible为false时会触发的事件
   */
  interface ICloseEvent extends tinyapp.ICustomEvent {}

  /**
   * 浮层关闭后触发的事件, 如果有动画，则在动画结束后触发
   */
  interface IAfterCloseEvent extends tinyapp.ICustomEvent {}
}
