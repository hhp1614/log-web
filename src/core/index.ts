import { IConfigMethod, IConfigPrefix, IConfigTag, ILevelConfig, LogMethod } from '../types'
import { checkFlag, getLogMethod, logMap } from './helper'
import LogWeb from '../main'

// 打印等级对应的文本和颜色
const levelMap: ILevelConfig = {
  info: { color: '#3190e8', text: '信息' },
  error: { color: '#ff0000', text: '错误' },
  success: { color: '#32b807', text: '成功' },
  fail: { color: '#e23fff', text: '失败' },
  debug: { color: '#ffa500', text: '调试' }
}

type PrintParams = {
  target: LogWeb
  defaultMethod: LogMethod
  level: keyof ILevelConfig
  args: any[]
}

type Cfg = {
  level: keyof ILevelConfig
  method: IConfigMethod
  prefix: IConfigPrefix
  tag: IConfigTag
  args: any[]
}

/**
 * 打印方法，搜集整理所有的参数
 * @param params 参数
 */
export function print(params: PrintParams) {
  const { target, level, defaultMethod, args } = params
  const config = logMap.get(target)!
  const { method, prefix, tag, hide } = config

  // 如果设置了隐藏，将不打印到控制台
  if (hide) return

  method.name = getLogMethod(defaultMethod, method.name)

  printToConsole({ level, method, prefix, tag, args })

  checkFlag(target, config)
}

/**
 * 打印到控制台
 * @param cfg 配置
 */
function printToConsole(cfg: Cfg) {
  const remark = getRemark(cfg)
  const methodName = cfg.method.name!
  console[methodName](...remark, ...cfg.args)
}

/**
 * 获取打印内容前的说明
 * @param cfg 配置
 */
function getRemark(cfg: Cfg) {
  const level = levelMap[cfg.level]

  let formatStr = `%c[${level.text}]`
  const styleList = [`color: ${level.color}`]

  if (cfg.prefix.name) {
    formatStr += `%c[${cfg.prefix.name}]`
    styleList.push('color: gray;')
  }

  if (cfg.tag.name) {
    formatStr += `%c[${cfg.tag.name}]`
    styleList.push('color: orange;')
  }

  return [formatStr, ...styleList]
}
