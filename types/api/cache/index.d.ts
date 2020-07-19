/**
 * @file 缓存
 */

declare namespace my {
  /**
   * 清除本地数据缓存的异步接口。清空内嵌 webview 的存储时不会同时清空当前应用本身的存储数据。
   */
  function clearStorage(): void;

  /**
   * 清除本地数据缓存的同步接口
   */
  function clearStorageSync(): void;

  interface IGetStorageSuccessResult {
    /**
     * key对应的内容
     */
    readonly data: string | Readonly<Record<string, any>>;
  }

  interface IGetStorageOptions {
    /**
     * 缓存数据的key
     */
    key: string;

    /**
     * 调用成功的回调函数
     */
    success?(res: IGetStorageSuccessResult): void;

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
   * 获取缓存数据的异步接口
   */
  function getStorage(option: IGetStorageOptions): void;

  interface IStorageInfo {
    /**
     * 当前storage中所有的key
     */
    readonly keys: ReadonlyArray<string>;

    /**
     * 当前占用的空间大小, 单位KB
     */
    readonly currentSize: string;

    /**
     * 限制的空间大小，单位KB
     */
    readonly limitSize: string;
  }

  interface IGetStorageInfoOptions {
    /**
     * 调用成功的回调函数
     */
    success?(res: IStorageInfo): void;

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
   * 异步获取当前storage的相关信息。
   */
  function getStorageInfo(options: IGetStorageInfoOptions): void;

  /**
   * 获取当前 storage 相关信息的同步接口
   */
  function getStorageInfoSync(): IStorageInfo;

  interface IGetStorageSyncOptions {
    /**
     * 缓存数据的key
     */
    key: string;
  }

  /**
   * 获取缓存数据的同步接口
   */
  function getStorageSync(options: IGetStorageSyncOptions): IGetStorageSuccessResult;

  interface IRemoveStorageOptions {
    /**
     * 缓存数据的key
     */
    key: string;

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
   * 删除缓存数据的异步接口。移除内嵌 webview 的存储数据时不会移除当前应用的存储数据。
   */
  function removeStorage(options: IRemoveStorageOptions): void;

  interface IRemoveStorageSyncOptions {
    /**
     * 缓存数据的key
     */
    key: string;
  }

  /**
   * 删除缓存数据的同步接口
   */
  function removeStorageSync(options: IRemoveStorageSyncOptions): void;

  interface ISetStorageOptions {
    /**
     * 缓存数据的key
     */
    key: string;

    /**
     * 要缓存的数据
     */
    data: string | Record<string, any>;

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
   * 将数据存储在本地缓存中指定的 key 中的异步接口，会覆盖掉原来该 key 对应的数据。
   */
  function setStorage(options: ISetStorageOptions): void;

  interface ISetStorageSyncOptions {
    /**
     * 缓存数据的key
     */
    key: string;

    /**
     * 要缓存的数据
     */
    data: string | Record<string, any>;
  }

  /**
   * 将数据存储在本地缓存中指定的 key 中的同步接口。
   */
  function setStorageSync(options: ISetStorageSyncOptions): void;
}

declare namespace my.qn {
  interface IOnDatabaseLimitSuccessResult {
    /**
     * 事件名称，databaseLimitDebug
     */
    name: string;
    /**
     * 事件数据
     */
    data: {
      /**
       * 当前数据库大小，单位 MB
       */
      dbSize: number;
    };
  }

  interface IOnDatabaseLimitCallback {
    (param: IOnDatabaseLimitSuccessResult): void;
  }

  /**
   * 小程序启动的时候（PC 端实际检查时机是第一次使用 my.qn.database 时），会检查 my.qn.database 对应的数据库大小。
   * 当数据库大小未超过警告值（PC 端默认 100MB）的时候，触发此事件。（当数据库大小超过警告值的时候，会触发 my.qn.onDatabaseLimitWarning）
   */
  function onDatabaseLimitDebug(callback: IOnDatabaseLimitCallback);

  interface IQueryDBSizeSuccessResult {
    /**
     * 是否调用成功
     */
    success: boolean;
    /**
     * JSON格式
     */
    data: string;
  }

  interface IQueryDBSizeOptions {
    succcess?: (res: IQueryDBSizeSuccessResult) => void;
  }

  /**
   * 查询当前数据库大小以及系统限制
   */
  function queryDBSize(options: IQueryDBSizeOptions): void;

  /**
   *  小程序启动的时候（PC 端实际检查时机是第一次使用 my.qn.database 时），会检查 my.qn.database 对应的数据库大小。
   *
   *  当数据库大小超过警告值（PC 端默认 100MB）的时候，触发此事件。
   *
   *  收到此事件后，小程序必须进行数据清理工作，如果小程序退出时，数据库大小超过了上限（PC 端默认 150MB），系统将删除数据库。
   */
  function onDatabaseLimitWarning(callback: IOnDatabaseLimitCallback);

  interface IDatabaseSuccessResult {
    /**
     * 是否调用成功
     */
    readonly success: boolean;
    /**
     * 如果是单条 SELECT，则输出查询结果
     */
    readonly data: string;
  }

  interface IDatabaseFailResult {
    readonly error: number;
    readonly errorMessage: string;
  }

  interface IDatabaseOptions {
    /**
     * execSql或batchSql
     */
    method: string;
    sql: string | [string, any[]];
    success?: (res: IDatabaseSuccessResult) => void;
    fail?: (res: IDatabaseFailResult) => void;
  }

  /**
   * 进行数据库操作。该数据库全库由开发者拥有。每小程序、每登录用户拥有一个这样的数据库。
   */
  function database(options: IDatabaseOptions): void;
}
