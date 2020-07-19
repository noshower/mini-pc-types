/**
 * @file 路由
 */

declare namespace my {
  interface INavigateBaseCallbackOptions {
    /**
     * 调用成功的回调函数
     */
    success?(): void;
    /**
     * 调用失败的回调函数
     */
    fail?(): void;
    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
  }

  interface ISwitchTabOptions {
    /**
     * 跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面）。
     * 注意：路径后不能带参数。
     */
    url: string;
  }

  /**
   * 跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面。
   */
  function switchTab(options: ISwitchTabOptions): void;

  interface INavigateBackOptions {
    /**
     * 返回的页面数，如果 delta 大于现有打开的页面数，则返回到首页。
     */
    delta?: number;
  }

  /**
   * 关闭当前页面，返回上一级或多级页面。可通过 getCurrentPages 获取当前的页面栈信息，决定需要返回几层。
   */
  function navigateBack(options: INavigateBackOptions): void;

  interface INavigateToOptions extends INavigateBaseCallbackOptions {
    /**
     * 需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。
     * 参数规则如下：路径与参数之间使用?分隔，参数键与参数值用=相连，不同参数必须用&分隔；如 path?key1=value1&key2=value2
     */
    url: string;
  }

  /**
   * 从当前页面，跳转到应用内的某个指定页面，可以使用 my.navigateBack 返回到原来页面。应用中页面栈最多十层。
   */

  function navigateTo(options: INavigateToOptions): void;

  interface IRedirectToOptions extends INavigateBaseCallbackOptions {
    /**
     * 需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。
     * 参数规则如下：路径与参数之间使用?分隔，参数键与参数值用=相连，不同参数必须用&分隔；如path?key1=value1&key2=value2
     */
    url: string;
  }

  /**
   * 关闭当前页面，跳转到应用内的某个指定页面。
   */
  function redirectTo(options: IRedirectToOptions): void;

  interface IReLaunchOptions extends INavigateBaseCallbackOptions {
    /**
     * 需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。
     * 参数规则如下：路径与参数之间使用?分隔，参数键与参数值用=相连，不同参数必须用&分隔；如path?key1=value1&key2=value2
     */
    url: string;
  }

  /**
   * 关闭当前所有页面，跳转到应用内的某个指定页面。
   */
  function reLaunch(options: IRedirectToOptions): void;
}

declare namespace my.qn {
  interface INavigateToQAPPCOptions {
    /**
     * 页面地址（不要加参数）
     */
    url: string;

    /**
     * GET参数，元素是一个 element，{ k1: v1, k2: v2 } 形式，系统会组合成 k1=v1&k2=v2 附加到 url 后
     */
    query?: {
      [key: string]: any;
    };

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: boolean) => void;

    /**
     * 接口调用失败的回调函数。参数为 error、errorMessage，具体见错误码列表。
     */
    fail?: (res: any) => void;

    /**
     * 	接口调用结束的回调函数。无论成功、失败都会回调，成功时参数同 sucsess，失败时参数同 fail。
     */
    complete?: (res: any) => void;
  }

  /**
   * 小程序打开原插件页面
   */
  function navigateToQAPPC(options: INavigateToQAPPCOptions): void;
}
