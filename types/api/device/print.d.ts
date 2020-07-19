/**
 * @file 打印机
 */

declare namespace my.qn {
  interface IPrintSuccessResult {
    /**
     * 是否调用成功
     */
    success: boolean;
    /**
     * 分号分隔的打印机名称列表
     */
    data: string;
  }

  interface IPrintOptions {
    /**
     * 要打印的节点 id
     */
    node_id: string;
    /**
     * 	执行打印的打印机名称（可使用 my.qn.getPrinters 获取）
     */
    printer: string;
    /**
     * 要打印的份数，默认1
     */
    copys: number;
    /**
     * 自定义纸张大小，默认A4
     */
    paper_size?: {
      /**
       * 纸张宽度，单位1/10毫米
       */
      width: number;
      /**
       * 纸张高度，单位1/10毫米
       */
      height: number;
    };

    success?: (res: Readonly<IPrintSuccessResult>) => void;
  }

  /**
   * 执行打印
   */
  function print(options: IPrintOptions): void;

  interface IGetPrintersSuccessResult {
    /**
     * 是否调用成功
     */
    success: boolean;
    /**
     * 分号分隔的打印机名称列表
     */
    data: string;
  }

  interface IGetPrintersOptions {
    success?: (res: Readonly<IGetPrintersSuccessResult>) => void;
  }

  /**
   * 获取系统打印机列表
   */
  function getPrinters(options: IGetPrintersOptions): void;
}
