import { IConfig } from '../types';
export declare class Console {
    private readonly prefix?;
    private readonly method?;
    constructor(config: IConfig);
    private print;
    info(tag: string, args: any[]): void;
    error(tag: string, args: any[]): void;
    success(tag: string, args: any[]): void;
    fail(tag: string, args: any[]): void;
    debug(tag: string, args: any[]): void;
}
