/**
 * @file select
 */

declare namespace tinyapp.select {
  interface IChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
    };
  }

  interface IBlurEvent extends tinyapp.IBaseEvent {}
}
