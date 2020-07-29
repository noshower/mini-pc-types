/**
 * @file switch
 */

// switch 为保留字
declare namespace tinyapp.Switch {
  /**
   * 开关状态改变是触发此事件
   */
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: boolean;
    };
  }

  /**
   * 鼠标点击事件
   */
  interface ITapEvent extends tinyapp.IBaseEvent {}
}
