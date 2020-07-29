/**
 * @file textarea
 */

declare namespace tinyapp.textarea {
  /**
   * 发生改变的时候触发的回调
   */
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  /**
   * 键盘按下的时候触发的回调
   */
  interface IKeyDownEvent extends tinyapp.ICustomEvent {}

  /**
   * 获取焦点时候触发的回调
   */
  interface IFocusEvent extends tinyapp.ICustomEvent {}

  /**
   * 失去焦点时候触发的回调
   */
  interface IBlurEvent extends tinyapp.ICustomEvent {}
}
