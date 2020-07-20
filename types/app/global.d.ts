/**
 * `App()` 接受一个 object 作为参数，用来配置小程序的生命周期等。
 */
declare function App<G>(options: tbapp.AppOptions<G>): void;

/**
 * 获取小程序实例，一般用在各个子页面之中获取顶层应用。
 */
declare function getApp(): tbapp.IGetAppResult;

/**
 * Page() 函数用来注册一个页面。
 * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
 */
declare function Page<D>(options: tbapp.PageOptions<D>): void;

/**
 * getCurrentPages() 函数用于获取当前页面栈的实例，
 * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
 */
declare function getCurrentPages(): Array<tbapp.IPageInstance<any>>;

declare function Component<P, D, M extends tbapp.IComponentMethods>(options: tbapp.ComponentOptions<P, D, M>): void;
