/**
 * @file tab
 */

declare namespace tbEvent.tab {
  interface onTapEvent extends tbEvent.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface onChangeEvent extends tbEvent.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface onCloseEvent extends tbEvent.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }
}
