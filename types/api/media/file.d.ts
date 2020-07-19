/**
 * @file 文件
 */

declare namespace my {
  interface IGetFileInfoSuccessResult {
    /**
     * 文件大小
     */
    size: number;
  }

  interface IGetFileInfoOptions {
    /**
     * 文件路径
     */
    apFilePath: string;

    /**
     * 调用成功的回调函数
     */
    success?: (res: IGetFileInfoSuccessResult) => void;

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
   * 获取文件信息。
   */
  function getFileInfo(options: IGetFileInfoOptions): void;

  interface IGetSavedFileInfoSuccessResult {
    /**
     * 文件大小
     */
    readonly size: number;
    /**
     * 创建时间的时间戳
     */
    readonly createTime: number;
  }

  interface IGetSavedFileInfoOptions {
    /**
     * 文件路径
     */
    apFilePath: string;

    /**
     * 调用成功的回调函数
     */
    success?: (res: IGetSavedFileInfoSuccessResult) => void;

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
   * 获取保存的文件信息
   */
  function getSavedFileInfo(options: IGetSavedFileInfoOptions): void;

  interface ISavedFile {
    /**
     * 文件大小
     */
    size: number;

    /**
     * 创建时间
     */
    createTime: number;

    /**
     * 文件路径
     */
    apFilePath: string;
  }

  interface IGetSavedFileListSuccessResult {
    /**
     * 文件列表
     */
    fileList: ReadonlyArray<ISavedFile>;
  }

  interface IGetSavedFileListOptions {
    /**
     * 调用成功的回调函数
     */
    success: (res: IGetSavedFileListSuccessResult) => void;

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
   * 获取保存的所有文件信息
   */
  function getSavedFileList(options: IGetSavedFileListOptions): void;

  interface IRemoveSavedFileOptions {
    /**
     * 文件路径
     */
    apFilePath: string;

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
   * 删除某个保存的文件
   */
  function removeSavedFile(options: IRemoveSavedFileOptions): void;

  interface ISaveFileSuccessResult {
    /**
     * 文件保存路径
     */
    readonly apFilePath: string;
  }

  interface ISaveFileOptions {
    /**
     * 文件路径
     */
    apFilePath: string;

    /**
     * 调用成功的回调函数
     */
    success: (res: ISaveFileSuccessResult) => void;

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
   * 保存文件到本地
   */
  function saveFile(options: ISaveFileOptions): void;
}

declare namespace my.qn {
  interface IQNChooseFileSuccessOptions {
    /**
     * 图片文件描述
     */
    apFilePaths: string[];
  }

  interface IQNChooseFileOptions {
    /**
     * 最大文件数，默认1张
     */
    count?: Number;
    /**
     * 图片= 0x01,
     *
     * 文档= 0x02,
     *
     * 多媒体= 0x04,
     *
     * 默认图片
     */
    type?: number;

    /**
     * 调用成功的回调函数
     */
    success?: (res: IQNChooseFileSuccessOptions) => void;

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
   * 选择文件
   */
  function chooseFile(options: IQNChooseFileOptions): void;
}
