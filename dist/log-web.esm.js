/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var levelColor = {
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
function getLogParams(prefix, level, tag, args) {
    // 打印等级颜色
    var color = levelColor[level];
    // 前缀
    var prefixStr = prefix ? "%c " + prefix + " " : '';
    // 格式化字符串
    var formatStr = prefixStr + "%c " + level + " %c " + tag + " %c\n" + args.map(function () { return '%o'; });
    // 前缀样式
    var stylePrefix = 'display: block;' +
        'padding: 1px;' +
        'background: gray;' +
        'color: #ffffff;' +
        'border-radius: 3px;' +
        'margin-right: 5px;' +
        'margin-bottom: 3px;';
    // 打印等级样式
    var styleLevel = 'display: block;' +
        'padding: 1px;' +
        ("background: " + color + ";") +
        'color: #ffffff;' +
        'border-radius: 3px 0 0 3px;' +
        'margin-bottom: 3px;';
    // tag 样式
    var styleTag = 'display: block;' +
        'padding: 1px;' +
        'background: gray;' +
        'color: #ffffff;' +
        'border-radius: 0 3px 3px 0;' +
        'margin-bottom: 3px;';
    // 防止影响后面的打印内容
    var styleEnd = "background: transparent;";
    var params = [formatStr];
    // 如果没有前缀就不使用前缀样式
    prefix && params.push(stylePrefix);
    return __spreadArrays(params, [styleLevel, styleTag, styleEnd], args);
}

var logMethod = ['log', 'info', 'warn', 'error', 'debug'];
var Core = /** @class */ (function () {
    function Core(config) {
        this.prefix = config.prefix;
        this.method = config.method;
    }
    Core.prototype.print = function (defaultMethod, params) {
        var method = this.method && logMethod.includes(this.method) ? this.method : defaultMethod;
        console[method].apply(console, params);
    };
    Core.prototype.info = function (tag, args) {
        var params = getLogParams(this.prefix, 'info', tag, args);
        this.print('info', params);
    };
    Core.prototype.error = function (tag, args) {
        var params = getLogParams(this.prefix, 'error', tag, args);
        this.print('error', params);
    };
    Core.prototype.success = function (tag, args) {
        var params = getLogParams(this.prefix, 'success', tag, args);
        this.print('log', params);
    };
    Core.prototype.fail = function (tag, args) {
        var params = getLogParams(this.prefix, 'fail', tag, args);
        this.print('error', params);
    };
    Core.prototype.debug = function (tag, args) {
        var params = getLogParams(this.prefix, 'debug', tag, args);
        this.print('debug', params);
    };
    return Core;
}());

// LogWeb 实例到 Console 实例的映射，私有化 Console 实例
var logMap = new Map();
var LogWeb = /** @class */ (function () {
    /**
     * 构造函数
     * @param config 配置
     * @param [config.prefix] 前缀
     * @param [config.method] 强制使用指定 console 中对应的方法
     */
    function LogWeb(config) {
        if (config === void 0) { config = {}; }
        logMap.set(this, new Core(config));
    }
    /**
     * 信息
     * @param tag 标签
     * @param args 参数
     */
    LogWeb.prototype.info = function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        logMap.get(this).info(tag, args);
    };
    /**
     * 错误
     * @param tag 标签
     * @param args 参数
     */
    LogWeb.prototype.error = function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        logMap.get(this).error(tag, args);
    };
    /**
     * 成功
     * @param tag 标签
     * @param args 参数
     */
    LogWeb.prototype.success = function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        logMap.get(this).success(tag, args);
    };
    /**
     * 失败
     * @param tag 标签
     * @param args 参数
     */
    LogWeb.prototype.fail = function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        logMap.get(this).fail(tag, args);
    };
    /**
     * 调试
     * @param tag 标签
     * @param args 参数
     */
    LogWeb.prototype.debug = function (tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        logMap.get(this).debug(tag, args);
    };
    return LogWeb;
}());

export default LogWeb;
