/**
 * @file TabBar
 */

declare namespace my.qn {
  interface ISwitchTabExOptions {
    /**
     * 对应 tabBarEx 配置中的 id 字段
     */
    id: string;

    /**
     * 接口调用成功的回调函数
     */
    success?: (res: boolean) => void;

    /**
     * 接口调用失败的回调函数。参数为 error、errorMessage，具体见错误码列表。
     */

    fail?: (res: any) => void;

    /**
     * 接口调用结束的回调函数。无论成功、失败都会回调，成功时参数同 sucsess，失败时参数同 fail。
     */
    complete?: (res: any) => void;
  }

  /**
   * 切换左侧导航条选中项
   */
  function switchTabEx(options: ISwitchTabExOptions): void;
}
