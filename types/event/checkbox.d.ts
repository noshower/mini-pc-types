/**
 * @file checkbox
 */

declare namespace tinyapp.checkbox {
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: boolean;
    };
  }
}
