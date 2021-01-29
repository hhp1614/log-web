import { IConfig, IConfigMethod, IConfigPrefix, IConfigTag, LogMethod } from '../types';
import LogWeb from '../main';

// 私有化缓存每一个 LogWeb 实例对应的配置
export const logMap: Map<LogWeb, IConfig> = new Map();

// 允许使用的 console 下的方法列表
export const logMethodList: LogMethod[] = ['log', 'info', 'warn', 'error', 'debug'];

export const methodDefault = (): IConfigMethod => ({
  name: undefined,
  flag: false
});
export const prefixDefault = (): IConfigPrefix => ({
  name: undefined,
  flag: false
});
export const tagDefault = (): IConfigTag => ({ name: undefined, flag: false });

/**
 * 检查是否为字符串
 * @description 是字符串，原样返回
 * @description 非字符串，返回空字符串
 * @param val 需要检查的值
 */
export function checkString(val: any) {
  return typeof val === 'string' ? val : '';
}

/**
 * 获取 console 下的方法名
 * @param defaultName 方法名不合法时使用的默认的方法名
 * @param name 用户指定的方法名
 */
export function getLogMethod(defaultName: LogMethod, name?: LogMethod): LogMethod {
  if (logMethodList.includes(name!)) {
    return name!;
  }
  return defaultName;
}

/**
 * 检查设置的 flag，如果 flag 没设置，会把对应的设置恢复成默认
 * @param target 实例
 * @param config 配置
 */
export function checkFlag(target: LogWeb, config: IConfig) {
  if (!config.method.flag) config.method = methodDefault();
  if (!config.prefix.flag) config.prefix = prefixDefault();
  if (!config.tag.flag) config.tag = tagDefault();

  logMap.set(target, config);
}
