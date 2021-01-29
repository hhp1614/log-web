import { ILevel, LogMethod } from './types';
import { checkString, logMap, methodDefault, prefixDefault, tagDefault } from './core/helper';
import { print } from './core';

class LogWeb implements ILevel {
  constructor(config: { hide?: boolean } = {}) {
    const hide = config?.hide!;
    logMap.set(this, {
      method: methodDefault(),
      prefix: prefixDefault(),
      tag: tagDefault(),
      hide
    });
  }

  /**
   * 指定使用 console 下的方法
   * @param method 方法名称 "log" | "info" | "warn" | "error" | "debug"
   * @param flag 是否保存，默认在调用输出方法后删除此次设置的 method
   */
  method(method?: LogMethod, flag = false) {
    const config = logMap.get(this)!;
    config.method.name = checkString(method) as LogMethod;
    config.method.flag = flag;
    logMap.set(this, config);
    return this;
  }

  /**
   * 指定使用的前缀
   * @param prefix 前缀
   * @param flag 是否保存，默认在调用输出方法后删除此次设置的 prefix
   */
  prefix(prefix?: string, flag = false) {
    const config = logMap.get(this)!;
    config.prefix.name = checkString(prefix);
    config.prefix.flag = flag;
    logMap.set(this, config);
    return this;
  }

  /**
   * 指定使用的标签
   * @param tag 标签
   * @param flag 是否保存，默认在调用输出方法后删除此次设置的 tag
   */
  tag(tag?: string, flag = false) {
    const config = logMap.get(this)!;
    config.tag.name = checkString(tag);
    config.tag.flag = flag;
    logMap.set(this, config);
    return this;
  }

  /**
   * 打印信息
   * @param args 参数，同 console.log() 的参数
   */
  info(...args: any[]) {
    print({ target: this, defaultMethod: 'info', level: 'info', args });
  }

  /**
   * 打印错误
   * @param args 参数，同 console.log() 的参数
   */
  error(...args: any[]) {
    print({ target: this, defaultMethod: 'error', level: 'error', args });
  }

  /**
   * 打印成功信息
   * @param args 参数，同 console.log() 的参数
   */
  success(...args: any[]) {
    print({ target: this, defaultMethod: 'info', level: 'success', args });
  }

  /**
   * 打印失败信息
   * @param args 参数，同 console.log() 的参数
   */
  fail(...args: any[]) {
    print({ target: this, defaultMethod: 'error', level: 'fail', args });
  }

  /**
   * 打印调试信息
   * @param args 参数，同 console.log() 的参数
   */
  debug(...args: any[]) {
    print({ target: this, defaultMethod: 'debug', level: 'debug', args });
  }
}

export default LogWeb;
