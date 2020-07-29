/**
 * @file date-picker
 */

declare namespace tinyapp.datePicker {
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface IVisibleChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      /**
       * visible: {Boolean} 弹层是否显示
       */
      value: boolean;
      values: [boolean, string];
    };
  }
}
