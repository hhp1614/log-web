[![GitHub license](https://img.shields.io/badge/license-MIT-aa0000.svg)](https://github.com/hhp1614/log-web/blob/master/LICENSE)
![](https://img.shields.io/badge/language-typescript-007bcd.svg)
[![npm version](https://img.shields.io/npm/v/@hhp1614/log-web.svg)](https://www.npmjs.com/package/@hhp1614/log-web)

# @hhp1614/log-web

使用 TypeScript 开发的一个浏览器日志打印工具

## 安装

```shell
npm i @hhp1614/log-web
```

## 使用

```js
import LogWeb from '@hhp1614/log-web';

const lw = new LogWeb();

// 第一个参数表示打印的 tag，用于分组
// 第二个开始的其余参数将原样打印到浏览器控制台
lw.info('tag-info', 'params...');
lw.error('tag-error', 'params...');
lw.success('tag-success', 'params...');
lw.fail('tag-fail', 'params...');
lw.debug('tag-debug', 'params...');
```

## 指定前缀

```js
const lw = new LogWeb({ prefix: 'hhp' });
```

## 指定全部打印使用 console 下的同一个方法

```js
// 'log' | 'info' | 'warn' | 'error' | 'debug'
const lw = new LogWeb({ method: 'debug' });

// 接下来 lw 中的所有方法底层都将使用 console.debug() 来打印到控制台
```
