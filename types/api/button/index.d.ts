/**
 * @file 系统按钮
 */

declare namespace my.qn {
  interface ISetSystemButtonStateOptions {
    /**
     * "refresh"表示刷新按钮
     */
    type: string;
    /**
     * true表示响应用户行为
     */
    value: boolean;
    /**
     * 调用成功的回调函数
     */
    success?: () => void;
    /**
     * 调用失败的回调函数
     */
    fail?: () => void;
    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
  }

  /**
   * 设置按钮状态
   */
  function setSystemButtonState(options: ISetSystemButtonStateOptions): void;

  /**
   * 响应刷新事件
   */
  function onRefresh(callback: (res: any) => void): void;
}
