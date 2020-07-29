/**
 * @file menu-button
 */

declare namespace tinyapp.menuButton {
  interface IVisibleChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      value: boolean;
    };
  }

  interface IItemClickEvent extends tinyapp.IBaseEvent {}
}
