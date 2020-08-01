/**
 * @file 交互反馈
 */

declare namespace my {
  interface IFeedbackCallbackOptions {
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

  interface IShowToastOptions extends IFeedbackCallbackOptions {
    /**
     * 文字内容
     */
    content?: string;

    /**
     * 	toast 类型，展示相应图标，
     * 默认 none，支持 success / fail / exception / none。其中 exception 类型必须传文字信息。
     */
    type?: 'success' | 'fail' | 'exception' | 'none';

    /**
     * 显示时长，单位为 ms，默认 2000。
     */
    duration?: number;
  }

  /**
   * 显示一个弱提示，可选择多少秒之后消失。
   */
  function showToast(options: IShowToastOptions): void;

  interface IAlertOptions extends IFeedbackCallbackOptions {
    /**
     * alert框的标题
     */
    title?: string;

    /**
     * alert框的内容
     */
    content?: string;

    /**
     * 按钮文字，默认确定
     */
    buttonText?: string;
  }

  /**
   * alert 警告框
   */
  function alert(options: IAlertOptions): void;

  interface IConfirmSuccessResult {
    /**
     * 点击 confirm 返回 true，点击 cancel 返回false
     */
    readonly confirm: boolean;

    /**
     * 是否点击了确认
     */
    readonly ok?: boolean;
  }

  interface IConfirmOptions {
    /**
     * confirm框的标题
     */
    title?: string;

    /**
     * confirm框的内容
     */
    content?: string;

    /**
     * 确认按钮文字，默认‘确定’
     */
    confirmButtonText?: string;

    /**
     * 确认按钮文字，默认‘取消’
     */
    cancelButtonText?: string;

    /**
     * 调用成功的回调函数
     */
    success?: (result: IConfirmSuccessResult) => void;

    /**
     * 调用失败的回调函数
     */
    fail?: (result: IConfirmSuccessResult) => void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: (result: IConfirmSuccessResult) => void;
  }

  /**
   * confirm 确认框。
   */
  function confirm(options: IConfirmOptions): void;

  // todo
  interface IHideLoadingOptions {
    /**
     * 具体指当前 page 实例，某些场景下，需要指明在哪个 page 执行hideLoading。
     */
    page?: any;
  }

  /**
   * 隐藏加载提示。
   */
  function hideLoading(options?: IHideLoadingOptions): void;

  /**
   * 隐藏弱提示
   */
  function hideToast(): void;

  interface IShowLoadingOptions extends IFeedbackCallbackOptions {
    /**
     * loading 的文字内容
     */
    content?: string;

    /**
     * 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 my.hideLoading 则不会显示。
     */
    delay?: number;
  }

  /**
   * 显示加载提示
   */
  function showLoading(options: IShowLoadingOptions): void;
}
