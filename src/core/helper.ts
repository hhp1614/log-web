import { IConfig, IConfigMethod, IConfigPrefix, IConfigTag, LogMethod } from '../types';
import LogWeb from '../main';

export const logMap: Map<LogWeb, IConfig> = new Map();

export const logMethodList: LogMethod[] = ['log', 'info', 'warn', 'error', 'debug'];

export const methodDefault = (): IConfigMethod => ({ name: undefined, flag: false });
export const prefixDefault = (): IConfigPrefix => ({ name: undefined, flag: false });
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

export function getLogMethod(defaultName: LogMethod, name?: LogMethod): LogMethod {
  if (logMethodList.includes(name!)) {
    return name!;
  }
  return defaultName;
}

export function checkFlag(target: LogWeb, config: IConfig) {
  if (!config.method.flag) config.method = methodDefault();
  if (!config.prefix.flag) config.prefix = prefixDefault();
  if (!config.tag.flag) config.tag = tagDefault();

  logMap.set(target, config);
}
