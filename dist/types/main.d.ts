import { IConfig, ILevelFunc } from './types';
declare class LogWeb implements ILevelFunc {
    /**
     * 构造函数
     * @param config 配置
     * @param [config.prefix] 前缀
     * @param [config.method] 强制使用指定 console 中对应的方法
     */
    constructor(config?: IConfig);
    /**
     * 信息
     * @param tag 标签
     * @param args 参数
     */
    info(tag: string, ...args: any[]): void;
    /**
     * 错误
     * @param tag 标签
     * @param args 参数
     */
    error(tag: string, ...args: any[]): void;
    /**
     * 成功
     * @param tag 标签
     * @param args 参数
     */
    success(tag: string, ...args: any[]): void;
    /**
     * 失败
     * @param tag 标签
     * @param args 参数
     */
    fail(tag: string, ...args: any[]): void;
    /**
     * 调试
     * @param tag 标签
     * @param args 参数
     */
    debug(tag: string, ...args: any[]): void;
}
export default LogWeb;
