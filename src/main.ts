import { Core } from './core';
import { IConfig, ILevelFunc } from './types';

// LogWeb 实例到 Console 实例的映射，私有化 Console 实例
const logMap: Map<LogWeb, Core> = new Map();

class LogWeb implements ILevelFunc {
  /**
   * 构造函数
   * @param config 配置
   * @param [config.prefix] 前缀
   * @param [config.method] 强制使用指定 console 中对应的方法
   */
  constructor(config: IConfig = {}) {
    logMap.set(this, new Core(config));
  }

  /**
   * 信息
   * @param tag 标签
   * @param args 参数
   */
  info(tag: string, ...args: any[]) {
    logMap.get(this)!.info(tag, args);
  }

  /**
   * 错误
   * @param tag 标签
   * @param args 参数
   */
  error(tag: string, ...args: any[]) {
    logMap.get(this)!.error(tag, args);
  }

  /**
   * 成功
   * @param tag 标签
   * @param args 参数
   */
  success(tag: string, ...args: any[]) {
    logMap.get(this)!.success(tag, args);
  }

  /**
   * 失败
   * @param tag 标签
   * @param args 参数
   */
  fail(tag: string, ...args: any[]) {
    logMap.get(this)!.fail(tag, args);
  }

  /**
   * 调试
   * @param tag 标签
   * @param args 参数
   */
  debug(tag: string, ...args: any[]) {
    logMap.get(this)!.debug(tag, args);
  }
}

export default LogWeb;
