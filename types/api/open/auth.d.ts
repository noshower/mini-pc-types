/**
 * @file 用户授权
 */

declare namespace my {
  interface IAuthorizeSuccessResult {
    /**
     * 失败的授权类型，key 是授权失败的 scope，value 是对应的错误码
     */
    authErrorScope: any;
    /**
     * 	成功的授权 scope
     */
    authSucessScope: any[];
  }

  interface IAuthorizeOptions {
    /**
     * 授权类型，目前支持：scope.userInfo
     */
    scopes: string;
    /**
     * 调用成功的回调函数
     */
    success?: (res: IAuthorizeSuccessResult) => void;
    /**
     * 调用失败的回调函数
     */
    fail?: (res: any) => void;
    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
  }
  /**
   * 主动触发用户授权
   *
   * 通过一次用户授权，得到订单、商品等全量的获取的能力。scopes传入参数为"*"，触发全量授权的接口。（千牛7.11.60N以上版本支持）
   */
  function authorize(options: IAuthorizeOptions): void;

  interface IGetAuthUserInfoSuccessOptions {
    /**
     * 用户昵称
     */
    nickName: string;
    /**
     * 用户头像链接
     */
    avatar: string;
  }

  interface IGetAuthUserInfoOptions {
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
   * 客户端获取用户信息
   */
  function getAuthUserInfo(options: IGetAuthUserInfoOptions): void;
}

declare namespace my.qn {
  interface ICleanTokenOptions {
    /**
     * 调用成功的回调函数
     */
    success?: () => void;
    /**
     * 调用失败的回调函数
     */
    fail?: (res: any) => void;
  }

  /**
   * 主动清除授权token
   */
  function cleanToken(options: ICleanTokenOptions): void;

  interface IShowSubAccountAuthOptions {
    /**
     * 需要授权的api权限点
     */
    api: string;
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
   * 弹出子账号授权框
   */
  function showSubAccountAuth(options: IShowSubAccountAuthOptions): void;
}
