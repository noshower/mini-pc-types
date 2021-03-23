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

  interface IOpenChatOptions {
    /**
     * 聊天的对象的nick，nick前请带上nick域, 所属域可选值为：cntaobao|cnalichn|enaliint, cntaobao:是淘宝用户, cnalichn:是中文站用户,enaliint:是国际站用户
     */
    nick: string;
    /**
     * 打开聊天窗，同时携带输入框文本
     */
    text?: string;
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
   * 打开聊天
   */
  function openChat(options: IOpenChatOptions): void;

  interface IImGetActiveUserOptions {
    success?: (res: IImGetActiveUserSuccessResult) => void;
    fail?: (res: any) => void;
  }

  interface IImGetActiveUserSuccessResult {
    user_nick: string;
  }

  /**
   * 获取当前IM旺旺联系人
   */
  function imGetActiveUser(): void;
}
