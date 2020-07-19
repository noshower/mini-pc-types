/**
 * @file 打开千牛组件
 */

declare namespace my.qn {
  interface IOpenComponentOptions {
    /**
     * 组件名 如calc 等参考如 expressprinter/calc等
     */
    component: string;
    /**
     * 组件参数 json字符串
     */
    param?: string;
    /**
     * 组件的一系列流程action如打印组件: InitPrint等
     */
    action?: string;
    /**
     * 调用成功的回调函数
     */
    success?: (res: any) => void;
    /**
     * 调用失败的回调函数
     */
    fail?: (res: any) => void;
    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (res: any) => void;
  }

  /**
   * 打开千牛组件
   */
  function openComponent(options: IOpenComponentOptions): void;

  interface IChangePriceOptions {
    /**
     * 订单号
     */
    tid: string;
    success?: (res: { success: boolean }) => void;
  }

  /**
   * 打开千牛改价格窗口
   */
  function changePrice(options: IChangePriceOptions): void;
}
