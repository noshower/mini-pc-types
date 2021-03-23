/**
 * @file webivew
 */
declare namespace my {
  type ICreateWebViewContextOptions = string;

  interface ICreateWebViewContextResult {
    postMessage: (params: any) => void;
  }

  /**
   * 通过创建 webviewContext 提供从小程序向 web-view 发送消息的能力
   */
  function createWebViewContext(
    arg: ICreateWebViewContextOptions
  ): ICreateWebViewContextResult;
}
