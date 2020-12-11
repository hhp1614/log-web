import { LogMethod } from './types';
declare class LogWeb {
    constructor();
    /**
     * 指定使用 console 下的方法
     * @param method 方法名称 "log" | "info" | "warn" | "error" | "debug"
     * @param flag 是否保存，默认在调用输出方法后删除此次设置的 method
     */
    method(method?: LogMethod, flag?: boolean): this;
    /**
     * 指定使用的前缀
     * @param prefix 前缀
     * @param flag 是否保存，默认在调用输出方法后删除此次设置的 prefix
     */
    prefix(prefix?: string, flag?: boolean): this;
    /**
     * 指定使用的标签
     * @param tag 标签
     * @param flag 是否保存，默认在调用输出方法后删除此次设置的 tag
     */
    tag(tag?: string, flag?: boolean): this;
    /**
     * 打印信息
     * @param args 参数，同 console.log() 的参数
     */
    info(...args: any[]): void;
    /**
     * 打印错误
     * @param args 参数，同 console.log() 的参数
     */
    error(...args: any[]): void;
    /**
     * 打印成功信息
     * @param args 参数，同 console.log() 的参数
     */
    success(...args: any[]): void;
    /**
     * 打印失败信息
     * @param args 参数，同 console.log() 的参数
     */
    fail(...args: any[]): void;
    /**
     * 打印调试信息
     * @param args 参数，同 console.log() 的参数
     */
    debug(...args: any[]): void;
}
export default LogWeb;
