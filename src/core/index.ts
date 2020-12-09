import { getLogParams } from './helper';
import { IConfig, LogMethod } from '../types';

const logMethod: LogMethod[] = ['log', 'info', 'warn', 'error', 'debug'];

export class Core {
  // 前缀
  private readonly prefix?: string;

  // 强制使用指定 console 中对应的方法
  private readonly method?: LogMethod;

  constructor(config: IConfig) {
    this.prefix = config.prefix;
    this.method = config.method;
  }

  private print(defaultMethod: LogMethod, params: any[]) {
    const method = this.method && logMethod.includes(this.method) ? this.method : defaultMethod;
    console[method](...params);
  }

  info(tag: string, args: any[]) {
    const params = getLogParams(this.prefix, 'info', tag, args);
    this.print('info', params);
  }

  error(tag: string, args: any[]) {
    const params = getLogParams(this.prefix, 'error', tag, args);
    this.print('error', params);
  }

  success(tag: string, args: any[]) {
    const params = getLogParams(this.prefix, 'success', tag, args);
    this.print('log', params);
  }

  fail(tag: string, args: any[]) {
    const params = getLogParams(this.prefix, 'fail', tag, args);
    this.print('error', params);
  }

  debug(tag: string, args: any[]) {
    const params = getLogParams(this.prefix, 'debug', tag, args);
    this.print('debug', params);
  }
}
