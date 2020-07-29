/**
 * @file pagination
 */

declare namespace tinyapp.pagination {
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: number;
    };
  }

  interface IPageSizeChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: number;
    };
  }
}
