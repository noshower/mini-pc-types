/**
 * @file checkbox-group
 */

declare namespace tinyapp.checkboxGroup {
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string[];
    };
  }
}
