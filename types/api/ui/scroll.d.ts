/**
 * @file 滚动
 */
declare namespace my {
  interface IPageScrollToOptions {
    /**
     * 滚动到页面的目标位置，单位 px
     */
    scrollTop?: number;
    /**
     * 滚动动画的时长，单位ms,基础库最低版本1.20.0
     */
    duration?: number;
    /**
     * 选择器，最低基础库版本1.20.0
     */
    selector?: string;
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

  function pageScrollTo(options: IPageScrollToOptions): void;
}
