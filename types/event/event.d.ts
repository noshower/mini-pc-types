/**
 * @file 事件
 */

declare namespace tinyapp {
  /**
   * 事件对象 https://docs.alipay.com/mini/framework/events#a-namefc3wdba%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1
   */
  interface IBaseEvent {
    readonly type: string;
    readonly timeStamp: number;
    readonly target: Readonly<{
      tagName: string;
      dataset: Readonly<Record<string, any>>;
      targetDataset: Readonly<Record<string, any>>;
      offsetLeft: number;
      offsetTop: number;
    }>;
    readonly currentTarget: Readonly<{
      tagName: string;
      dataset: Readonly<Record<string, any>>;
      offsetLeft: number;
      offsetTop: number;
    }>;
  }

  interface ICustomEvent extends IBaseEvent {
    /**
     * 自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入信息，
     * 媒体的错误事件会携带错误信息，详细的描述请参考组件定义中各个事件的定义。
     */
    readonly detail: Readonly<Record<string, any>>;
  }
}
