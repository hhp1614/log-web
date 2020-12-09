export declare type LogMethod = 'log' | 'info' | 'warn' | 'error' | 'debug';
export interface IConfig {
    prefix?: string;
    method?: LogMethod;
}
export interface ILevel {
    info: any;
    error: any;
    success: any;
    fail: any;
    debug: any;
}
export interface ILevelFunc extends ILevel {
    info(tag: string, ...args: any[]): void;
    error(tag: string, ...args: any[]): void;
    success(tag: string, ...args: any[]): void;
    fail(tag: string, ...args: any[]): void;
    debug(tag: string, ...args: any[]): void;
}
export interface ILevelColor extends ILevel {
    info: string;
    error: string;
    success: string;
    fail: string;
    debug: string;
}
