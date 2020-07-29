/**
 * @file menu
 */

declare namespace tinyapp.menu {
  interface IItemTapEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface ISelectEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: boolean;
    };
  }
}
