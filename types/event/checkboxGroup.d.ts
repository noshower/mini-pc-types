/**
 * @file checkbox-group
 */

declare namespace tinyapp.checkboxGroup {
  interface IChangeEvent<T = string[]> extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: T;
    };
  }
}
