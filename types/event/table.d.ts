/**
 * @file table
 */

declare namespace tinyapp.table {
  /**
   * 选择改变的时候触发的事件，注意: 其中records只会包含当前dataSource的数据，很可能会小于selectedRowKeys的长度
   */
  interface IChangeEvent<T = any> extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: ReadonlyArray<number | string>;
      readonly values: [ReadonlyArray<number | string>, ReadonlyArray<T>];
    };
  }

  /**
   * 用户手动选择/取消选择某行的回调
   */

  interface ISelectEvent<T = any> extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: boolean;
      readonly values: [boolean, T, ReadonlyArray<T>];
    };
  }

  /**
   * 用户手动选择/取消选择所有行的回调
   */

  interface ISelectAllEvent<T = any> extends tinyapp.ICustomEvent {
    readonly detail: Readonly<{
      value: boolean;
      values: [boolean, Readonly<T>];
    }>;
  }

  /**
   * 当具有 resizeable 的column移动时触发的事件
   */
  interface IResizeChangeEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly values: [string, number];
    };
  }

  /**
   * 点击列排序触发的事件
   */

  interface ISortEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: string;
      readonly values: [string, string, Record<string, string>];
    };
  }

  /**
   * 点击过滤确认按钮触发的事件
   */

  interface IFilterEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly value: Record<string, any>;
      readonly values: Record<string, string>[];
    };
  }

  /**
   * 在内容区域滚动的时候触发的函数
   */
  interface IBodyScrollEvent extends tinyapp.ICustomEvent {}
}
