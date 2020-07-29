/**
 * @file 图片
 */

declare namespace my {
  type ChooseImageSizeType = 'original' | 'compressed';

  type ChooseImageSourceType = 'camera' | 'album';

  interface IImageSuccessResult {
    /**
     * 图片文件描述
     */
    apFilePaths: ReadonlyArray<string>;
  }

  interface IChooseImageOptions {
    /**
     * 最大可选照片数，默认1张
     */
    count?: number;

    /**
     * 	original 原图，compressed 压缩图，默认二者都有
     */
    sizeType?: ChooseImageSizeType[];

    /**
     * 相册选取或者拍照，默认 [’camera‘,‘album’]
     */
    sourceType?: ChooseImageSourceType[];

    /**
     * 调用成功的回调函数
     */
    success?: (res: IImageSuccessResult) => void;

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
   * 选择图片。
   */
  function chooseImage(options: IChooseImageOptions): void;

  interface ICompressImageOptions {
    /**
     * 要压缩的图片地址数组
     */
    apFilePaths: string[];

    /**
     * 压缩级别，支持 0 ~ 4 的整数，默认 4
     *
     * 0:低质量
     *
     * 1：中等质量
     *
     * 2：高质量
     *
     * 3：不压缩
     *
     * 4：根据网络适应
     */
    compressLevel?: number;

    /**
     * 调用成功的回调函数
     */
    success?: (res: IImageSuccessResult) => void;

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
   * 压缩图片
   */
  function compressImage(options: ICompressImageOptions): void;

  interface IGetImageInfoSuccessResult {
    /**
     * 图片宽度（单位px）
     */
    width: number;
    /**
     * 图片高度（单位px）
     */
    height: number;
    /**
     * 图片本地路径
     */
    path: string;
    /**
     * 返回图片的格式
     */
    type: string;
  }

  interface IGetImageInfoOptions {
    /**
     * 图片路径，目前支持：网络图片路径、apFilePath 路径、相对路径
     */
    src: string;

    /**
     * 调用成功的回调函数
     */

    success?: (res: Readonly<IGetImageInfoSuccessResult>) => void;

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
   * 获取图片信息
   */
  function getImageInfo(options: IGetImageInfoOptions): void;

  interface IPreviewImageOptions {
    /**
     * 要预览的图片链接列表
     */
    urls: string[];

    /**
     * 当前显示图片索引，默认 0
     */
    current?: number;

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
   * 预览图片。不支持本地图片路径。
   */
  function previewImage(options: IPreviewImageOptions): void;

  interface ISaveImageOptions {
    /**
     * 要保存的图片链接
     */
    url: string;

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
   * 保存图片到本地
   */
  function saveImage(options: ISaveImageOptions): void;
}
