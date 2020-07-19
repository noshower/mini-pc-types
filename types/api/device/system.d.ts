/**
 * @file 系统信息
 */
declare namespace my {
  interface IGetSystemInfoSuccessResult {
    /**
     * 手机型号
     */
    model: string;
    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 窗口宽度
     */
    windowWidth: number;
    /**
     * 窗口高度
     */
    windowHeight: number;
    /**
     * 支付宝设置的语言
     */
    language: string;
    /**
     * 支付宝版本号
     */
    version: string;
    /**
     * 设备磁盘容量
     *
     * 最低版本 1.1.1
     */
    storage: string;
    /**
     * 当前电量百分比
     *
     * 最低版本 1.1.1
     */
    currentBattery: string;
    /**
     * 系统版本
     *
     * 最低版本 1.1.1
     */
    system: string;
    /**
     * 系统名：Android，iOS/ iPhone OS
     *
     * 最低版本 1.1.1
     */
    platform: string;
    /**
     * 标题栏高度
     *
     * 最低版本 1.1.1
     */
    titleBarHeight: number;
    /**
     * 状态栏高度
     *
     * 最低版本 1.1.1
     */
    statusBarHeight: number;
    /**
     * 屏幕宽度
     *
     * 最低版本 1.1.1
     */
    screenWidth: number;
    /**
     * 屏幕高度
     *
     * 最低版本 1.1.1
     */
    screenHeight: number;
    /**
     * 手机品牌
     *
     * 最低版本 1.1.1
     */
    brand: string;
    /**
     * 用户设置字体大小
     *
     * 最低版本 1.1.1
     */
    fontSizeSetting: number;
    /**
     * 当前运行的客户端，当前是支付宝则有效值是"alipay"
     */
    app: string;
  }

  interface IGetSystemInfoOptions {
    /**
     * 接口调用成功的回调
     */
    success?(res?: Readonly<IGetSystemInfoSuccessResult>): void;

    /**
     * 调用失败的回调函数
     */
    fail?(): void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
  }

  /**
   * 获取系统信息。
   */
  function getSystemInfo(options: IGetSystemInfoOptions): void;

  /**
   * 获取手机系统信息的同步接口。返回值同 my.getSystemInfo 接口 success 回调参数。
   */
  function getSystemInfoSync(): Readonly<IGetSystemInfoSuccessResult>;
}
