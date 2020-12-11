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
export declare function getLogMethod(defaultName: LogMethod, name?: LogMethod): LogMethod;
export declare function checkFlag(target: LogWeb, config: IConfig): void;
