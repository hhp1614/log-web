import { ILevel } from '../types';
/**
 * 获取打印使用的参数
 * @param prefix 前缀
 * @param level 日志等级
 * @param tag 日志标签
 * @param args 参数
 */
export declare function getLogParams(prefix: string | void, level: keyof ILevel, tag: string, args: any[]): any[];
