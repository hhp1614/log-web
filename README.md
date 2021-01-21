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
import LogWeb from '@hhp1614/log-web'

const lw = new LogWeb()

lw.info('我是 info 方法')
lw.error('我是 error 方法')
```

### 不同打印等级

一共 5 种输出的方法：`info`、`error`、`success`、`fail`、`debug`

这 5 中输出方法执行时，默认会把当前设置的 `method`、`prefix`、`tag` 清空

如果要保持当前设置的 `method`、`prefix`、`tag` 不被清空，请在设置时将第二个参数设置为 `true`

```js
const lw = new LogWeb()

lw.info('我是 info 方法')
lw.error('我是 error 方法')
lw.success('我是 success 方法')
lw.fail('我是 fail 方法')
lw.debug('我是 debug 方法')
```

### 链式调用

遇到这 5 种输出方法（`info`、`error`、`success`、`fail`、`debug`）之后，链式调用将终止

简单来说，就是必须以上面的 5 种输出方法结尾，前面不限制调用的**数量**和**顺序**

```js
const lw = new LogWeb()

lw.method('warn').prefix('前缀').tag('标签').info('我是 info 方法')
lw.info('我是 info 方法')
```

### 保存指定使用 console 方法

会覆盖底层使用的默认 console 方法

| 输出方法    | 底层使用的方法    |
| ----------- | ----------------- |
| `info()`    | `console.info()`  |
| `error()`   | `console.error()` |
| `success()` | `console.info()`  |
| `fail()`    | `console.error()` |
| `debug()`   | `console.debug()` |

`.method()` 允许设置的方法：`"log"` | `"info"` | `"warn"` | `"error"` | `"debug"`

分别对应 `console` 下的这 5 个方法

```js
const lw = new LogWeb()

const instance = lw.method('warn', true)

instance.prefix('前缀').tag('标签').info('我是 info 方法')
instance.tag('标签').info('我是 info 方法')
instance.info('我是 info 方法')
instance.error('我是 error 方法')
instance.success('我是 success 方法')
instance.fail('我是 fail 方法')
instance.debug('我是 debug 方法')
```

### 保存指定前缀

```js
const lw = new LogWeb()

const instance = lw.prefix('hhp', true)

instance.method('warn').tag('标签1').info('我是 info 方法')
instance.tag('标签2').info('我是 info 方法')
instance.info('我是 info 方法')
instance.error('我是 error 方法')
instance.success('我是 success 方法')
instance.fail('我是 fail 方法')
instance.debug('我是 debug 方法')
```

### 保存指定标签

```js
const lw = new LogWeb()

const instance = lw.tag('hhp', true)

instance.method('warn').prefix('前缀').info('我是 info 方法')
instance.prefix('前缀').info('我是 info 方法')
instance.info('我是 info 方法')
instance.error('我是 error 方法')
instance.success('我是 success 方法')
instance.fail('我是 fail 方法')
instance.debug('我是 debug 方法')
```

### 隐藏打印

初始化时，可以设置隐藏这个实例的所有打印，表现为浏览器控制台没有输出

```js
const lw1 = new LogWeb({ hide: true })
lw1.info('我是隐藏的 info 方法')

const lw2 = new LogWeb({ hide: false })
lw2.info('我是显示的 info 方法')
```
