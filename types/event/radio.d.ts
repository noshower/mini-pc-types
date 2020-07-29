/**
 * @file radio
 */

declare namespace tinyapp.radio {
  /**
   * 状态变化时触发的事件
   */
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: boolean;
    };
  }
}

declare namespace tinyapp.radiogroup {
  /**
   * 选中值改变时的事件
   */
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string | number;
    };
  }
}
