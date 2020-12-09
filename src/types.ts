// 允许使用的 console 中的方法
export type LogMethod = 'log' | 'info' | 'warn' | 'error' | 'debug';

// 配置
export interface IConfig {
  // 前缀
  prefix?: string;
  // 强制使用指定 console 中对应的方法
  method?: LogMethod;
}

// 打印等级
export interface ILevel {
  info: any;
  error: any;
  success: any;
  fail: any;
  debug: any;
}

// 打印等级对应的方法
export interface ILevelFunc extends ILevel {
  info(tag: string, ...args: any[]): void;
  error(tag: string, ...args: any[]): void;
  success(tag: string, ...args: any[]): void;
  fail(tag: string, ...args: any[]): void;
  debug(tag: string, ...args: any[]): void;
}

// 打印等级对应的颜色
export interface ILevelColor extends ILevel {
  info: string;
  error: string;
  success: string;
  fail: string;
  debug: string;
}
