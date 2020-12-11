export declare type LogMethod = 'log' | 'info' | 'warn' | 'error' | 'debug';
export interface IConfig {
    method: IConfigMethod;
    prefix: IConfigPrefix;
    tag: IConfigTag;
}
export interface IConfigMethod {
    name?: LogMethod;
    flag: boolean;
}
export interface IConfigPrefix {
    name?: string;
    flag: boolean;
}
export interface IConfigTag {
    name?: string;
    flag: boolean;
}
export interface ILevel {
    info: any;
    error: any;
    success: any;
    fail: any;
    debug: any;
}
export interface ILevelConfigItem {
    color: string;
    text: string;
}
export interface ILevelConfig extends ILevel {
    info: ILevelConfigItem;
    error: ILevelConfigItem;
    success: ILevelConfigItem;
    fail: ILevelConfigItem;
    debug: ILevelConfigItem;
}
