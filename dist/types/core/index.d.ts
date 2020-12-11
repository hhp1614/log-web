import { ILevelConfig, LogMethod } from '../types';
import LogWeb from '../main';
declare type PrintParams = {
    target: LogWeb;
    defaultMethod: LogMethod;
    level: keyof ILevelConfig;
    args: any[];
};
export declare function print(params: PrintParams): void;
export {};
