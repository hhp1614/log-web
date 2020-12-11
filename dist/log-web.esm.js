var logMap = new Map();
var logMethodList = ['log', 'info', 'warn', 'error', 'debug'];
var methodDefault = function () { return ({ name: undefined, flag: false }); };
var prefixDefault = function () { return ({ name: undefined, flag: false }); };
var tagDefault = function () { return ({ name: undefined, flag: false }); };
/**
 * 检查是否为字符串
 * @description 是字符串，原样返回
 * @description 非字符串，返回空字符串
 * @param val 需要检查的值
 */
function checkString(val) {
    return typeof val === 'string' ? val : '';
}
function getLogMethod(defaultName, name) {
    if (logMethodList.includes(name)) {
        return name;
    }
    return defaultName;
}
function checkFlag(target, config) {
    if (!config.method.flag)
        config.method = methodDefault();
    if (!config.prefix.flag)
        config.prefix = prefixDefault();
    if (!config.tag.flag)
        config.tag = tagDefault();
    logMap.set(target, config);
}

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

var levelMap = {
    info: { color: '#3190e8', text: '信息' },
    error: { color: '#ff0000', text: '错误' },
    success: { color: '#32b807', text: '成功' },
    fail: { color: '#e23fff', text: '失败' },
    debug: { color: '#ffa500', text: '调试' }
};
function print(params) {
    var target = params.target, level = params.level, defaultMethod = params.defaultMethod, args = params.args;
    var config = logMap.get(target);
    var method = config.method, prefix = config.prefix, tag = config.tag;
    method.name = getLogMethod(defaultMethod, method.name);
    printToConsole({ level: level, method: method, prefix: prefix, tag: tag, args: args });
    checkFlag(target, config);
}
function printToConsole(cfg) {
    var remark = getRemark(cfg);
    var methodName = cfg.method.name;
    console[methodName].apply(console, __spreadArrays(remark, cfg.args));
}
function getRemark(cfg) {
    var level = levelMap[cfg.level];
    var formatStr = "%c[" + level.text + "]";
    var styleList = ["color: " + level.color];
    if (cfg.prefix.name) {
        formatStr += "%c[" + cfg.prefix.name + "]";
        styleList.push('color: gray;');
    }
    if (cfg.tag.name) {
        formatStr += "%c[" + cfg.tag.name + "]";
        styleList.push('color: orange;');
    }
    return __spreadArrays([formatStr], styleList);
}

var LogWeb = /** @class */ (function () {
    function LogWeb() {
        logMap.set(this, { method: methodDefault(), prefix: prefixDefault(), tag: tagDefault() });
    }
    /**
     * 指定使用 console 下的方法
     * @param method 方法名称 "log" | "info" | "warn" | "error" | "debug"
     * @param flag 是否保存，默认在调用输出方法后删除此次设置的 method
     */
    LogWeb.prototype.method = function (method, flag) {
        if (flag === void 0) { flag = false; }
        var config = logMap.get(this);
        config.method.name = checkString(method);
        config.method.flag = flag;
        logMap.set(this, config);
        return this;
    };
    /**
     * 指定使用的前缀
     * @param prefix 前缀
     * @param flag 是否保存，默认在调用输出方法后删除此次设置的 prefix
     */
    LogWeb.prototype.prefix = function (prefix, flag) {
        if (flag === void 0) { flag = false; }
        var config = logMap.get(this);
        config.prefix.name = checkString(prefix);
        config.prefix.flag = flag;
        logMap.set(this, config);
        return this;
    };
    /**
     * 指定使用的标签
     * @param tag 标签
     * @param flag 是否保存，默认在调用输出方法后删除此次设置的 tag
     */
    LogWeb.prototype.tag = function (tag, flag) {
        if (flag === void 0) { flag = false; }
        var config = logMap.get(this);
        config.tag.name = checkString(tag);
        config.tag.flag = flag;
        logMap.set(this, config);
        return this;
    };
    /**
     * 打印信息
     * @param args 参数，同 console.log() 的参数
     */
    LogWeb.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        print({ target: this, defaultMethod: 'info', level: 'info', args: args });
    };
    /**
     * 打印错误
     * @param args 参数，同 console.log() 的参数
     */
    LogWeb.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        print({ target: this, defaultMethod: 'error', level: 'error', args: args });
    };
    /**
     * 打印成功信息
     * @param args 参数，同 console.log() 的参数
     */
    LogWeb.prototype.success = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        print({ target: this, defaultMethod: 'info', level: 'success', args: args });
    };
    /**
     * 打印失败信息
     * @param args 参数，同 console.log() 的参数
     */
    LogWeb.prototype.fail = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        print({ target: this, defaultMethod: 'error', level: 'fail', args: args });
    };
    /**
     * 打印调试信息
     * @param args 参数，同 console.log() 的参数
     */
    LogWeb.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        print({ target: this, defaultMethod: 'debug', level: 'debug', args: args });
    };
    return LogWeb;
}());

export default LogWeb;
