import { ILevel, ILevelColor } from '../types';

const levelColor: ILevelColor = {
  info: '#3190e8',
  error: '#ff0000',
  success: '#32b807',
  fail: '#e23fff',
  debug: '#ffa500'
};

/**
 * 获取打印使用的参数
 * @param prefix 前缀
 * @param level 日志等级
 * @param tag 日志标签
 * @param args 参数
 */
export function getLogParams(prefix: string | void, level: keyof ILevel, tag: string, args: any[]) {
  // 打印等级颜色
  const color = levelColor[level];
  // 前缀
  const prefixStr = prefix ? `%c ${prefix} ` : '';
  // 格式化字符串
  const formatStr = `${prefixStr}%c ${level} %c ${tag} %c\n` + args.map(() => '%o');

  // 前缀样式
  const stylePrefix =
    'display: block;' +
    'padding: 1px;' +
    'background: gray;' +
    'color: #ffffff;' +
    'border-radius: 3px;' +
    'margin-right: 5px;' +
    'margin-bottom: 3px;';
  // 打印等级样式
  const styleLevel =
    'display: block;' +
    'padding: 1px;' +
    `background: ${color};` +
    'color: #ffffff;' +
    'border-radius: 3px 0 0 3px;' +
    'margin-bottom: 3px;';
  // tag 样式
  const styleTag =
    'display: block;' +
    'padding: 1px;' +
    'background: gray;' +
    'color: #ffffff;' +
    'border-radius: 0 3px 3px 0;' +
    'margin-bottom: 3px;';

  // 防止影响后面的打印内容
  const styleEnd = `background: transparent;`;
  const params = [formatStr];
  // 如果没有前缀就不使用前缀样式
  prefix && params.push(stylePrefix);

  return [...params, styleLevel, styleTag, styleEnd, ...args];
}
