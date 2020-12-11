import { IConfig, IConfigMethod, IConfigPrefix, IConfigTag, LogMethod } from '../types';
import LogWeb from '../main';
export declare const logMap: Map<LogWeb, IConfig>;
export declare const logMethodList: LogMethod[];
export declare const methodDefault: () => IConfigMethod;
export declare const prefixDefault: () => IConfigPrefix;
export declare const tagDefault: () => IConfigTag;
/**
 * 检查是否为字符串
 * @description 是字符串，原样返回
 * @description 非字符串，返回空字符串
 * @param val 需要检查的值
 */
export declare function checkString(val: any): string;
/**
 * 获取 console 下的方法名
 * @param defaultName 方法名不合法时使用的默认的方法名
 * @param name 用户指定的方法名
 */
export declare function getLogMethod(defaultName: LogMethod, name?: LogMethod): LogMethod;
/**
 * 检查设置的 flag，如果 flag 没设置，会把对应的设置恢复成默认
 * @param target 实例
 * @param config 配置
 */
export declare function checkFlag(target: LogWeb, config: IConfig): void;
