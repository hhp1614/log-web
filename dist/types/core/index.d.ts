import { ILevelConfig, LogMethod } from '../types';
import LogWeb from '../main';
declare type PrintParams = {
    target: LogWeb;
    defaultMethod: LogMethod;
    level: keyof ILevelConfig;
    args: any[];
};
/**
 * 打印方法，搜集整理所有的参数
 * @param params 参数
 */
export declare function print(params: PrintParams): void;
export {};
