import { RequestMethod } from '../types';
declare type AjaxConfig = {
    url: string;
    data: any;
    method?: RequestMethod;
    header?: {
        [k: string]: string;
    };
    timeout?: number;
};
export declare function ajax({ url, data, method, header, timeout }: AjaxConfig): Promise<unknown>;
export {};
