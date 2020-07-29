/**
 * @file select
 */

declare namespace tinyapp.select {
  interface IChangeEvent<T = string> extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: T;
    };
  }

  interface IBlurEvent extends tinyapp.IBaseEvent {}
}
