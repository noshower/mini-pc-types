/**
 * @file tab
 */

declare namespace tinyapp.tab {
  /**
   * 点击单个选项卡时触发的回调
   */
  interface ITapEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  /**
   * 选项卡发生切换时的事件回调
   */
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  /**
   * 选项卡被关闭时的事件回调
   */
  interface ICloseEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }
}
