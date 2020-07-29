/**
 * @file image
 */

declare namespace tinyapp.image {
  /**
   * 图片载入完毕时触发
   */
  interface ILoadEvent extends tinyapp.ICustomEvent {
    readonly detail: Readonly<{
      /**
       * 图片宽度
       */
      width: number;
      /**
       * 图片高度
       */
      height: number;
    }>;
  }

  /**
   * 当图片加载错误时触发
   */
  interface IErrorEvent extends tinyapp.ICustomEvent {
    readonly detail: {
      readonly errMsg: string;
    };
  }

  /**
   * 点击图片时触发
   */
  interface ITapEvent extends tinyapp.ICustomEvent {
    readonly detail: Readonly<{
      clientX: number;
      clientY: number;
      pageX: number;
      pageY: number;
    }>;
  }
}
