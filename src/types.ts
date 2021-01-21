// 允许使用的 console 下的方法
export type LogMethod = 'log' | 'info' | 'warn' | 'error' | 'debug'

// 配置
export interface IConfig {
  method: IConfigMethod
  prefix: IConfigPrefix
  tag: IConfigTag
  hide: boolean
}

// 配置 - 使用 console 的方法
export interface IConfigMethod {
  // 允许使用的 console 下的方法
  name?: LogMethod
  // 是否保存
  flag: boolean
}

// 配置 - 前缀
export interface IConfigPrefix {
  // 前缀
  name?: string
  // 是否保存
  flag: boolean
}

// 配置 - 标签
export interface IConfigTag {
  // 标签
  name?: string
  // 是否保存
  flag: boolean
}

// 打印等级
export interface ILevel {
  info: any
  error: any
  success: any
  fail: any
  debug: any
}

// 打印等级对应的文本和颜色
export interface ILevelConfigItem {
  // 颜色
  color: string
  // 文本
  text: string
}

// 打印等级对应的配置
export interface ILevelConfig extends ILevel {
  info: ILevelConfigItem
  error: ILevelConfigItem
  success: ILevelConfigItem
  fail: ILevelConfigItem
  debug: ILevelConfigItem
}
