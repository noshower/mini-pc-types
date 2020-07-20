/**
 * @file tab
 */

declare namespace event.tab {
  interface onTapEvent extends event.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface onChangeEvent extends event.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface onCloseEvent extends event.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }
}
