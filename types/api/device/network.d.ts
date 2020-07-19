/**
 * @file 网络
 */

declare namespace my {
  interface IDownloadFileSuccessResult {
    /**
     * 文件的临时路径
     */
    readonly apFilePath: string;
  }

  interface IDownloadFileFailResult {
    /**
     * - 12：下载失败
     * - 13：没有权限
     */
    error: 12 | 13;
  }

  interface IDownloadFileOptions {
    /**
     * 下载文件地址
     */
    url: string;

    /**
     * HTTP 请求 Header
     */
    header?: Record<string, string>;

    /**
     * 调用成功的回调函数
     */
    success?: (res?: IDownloadFileSuccessResult) => void;

    /**
     * 调用失败的回调函数
     */
    fail?(res: IDownloadFileFailResult): void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(res: IDownloadFileFailResult | IDownloadFileSuccessResult): void;
  }

  /**
   * 下载文件资源到本地
   */
  function downloadFile(options: IDownloadFileOptions): void;

  interface IUploadFileSuccessResult {
    /**
     * 开发者服务器返回的数据
     */
    readonly data: string;

    /**
     * HTTP状态码
     */
    readonly statusCode: number;

    /**
     * 服务器返回的 header
     */
    readonly header: Readonly<Record<string, string>>;
  }

  interface IUploadFileOptions {
    /**
     * 开发者服务器地址
     */
    url: string;

    /**
     * 要上传文件资源的本地定位符
     */
    filePath: string;

    /**
     * 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    fileName: string;

    /**
     * 文件类型，image / video / audio
     */
    fileType?: 'image' | 'video' | 'audio';

    /**
     * 	HTTP 请求 Header
     */
    header?: Record<string, string>;

    /**
     * HTTP 请求中其他额外的 form 数据
     */
    formData?: Record<string, any>;

    /**
     * 调用成功的回调函数
     */
    success?: (res?: IUploadFileSuccessResult) => void;

    /**
     * 结果码
     *
     * 11： 文件不存在
     *
     * 12： 上传文件失败
     *
     * 13： 没有权限
     */
    fail?: (res: { error: 11 | 12 | 13 }) => void;

    /**
     * 	调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void;
  }

  /**
   * 上传本地资源到开发者服务器
   */
  function uploadFile(options: IUploadFileOptions): void;

  type INetworkType = 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';

  interface IGetNetworkTypeSuccessResult {
    /**
     * 网络是否可用
     */
    readonly networkAvailable: boolean;

    /**
     * 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN
     */
    readonly networkType: INetworkType;
  }

  interface IGetNetworkTypeOptions {
    /**
     * 调用成功的回调函数
     */
    success?(res: IGetNetworkTypeSuccessResult): void;

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
   * 获取当前网络状态。
   */
  function getNetworkType(options: IGetNetworkTypeOptions): void;

  interface IOnNetworkStatusChangeEvent {
    /**
     * 网络是否可用
     */
    readonly isConnected: boolean;

    /**
     * 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN
     */
    readonly networkType: INetworkType;
  }

  /**
   * 开始网络状态变化的监听
   */
  function onNetworkStatusChange(callback: (res: IOnNetworkStatusChangeEvent) => void): void;

  /**
   * 取消网络状态变化的监听
   */
  function offNetworkStatusChange(): void;
}
