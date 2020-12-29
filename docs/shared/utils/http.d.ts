/// <reference types="node" />
import { IncomingHttpHeaders } from "http";
interface HttpOptions {
    addAuth?: boolean;
    headers?: IncomingHttpHeaders;
    data?: any;
}
export declare const getRequest: (url: string, options: HttpOptions) => Promise<any>;
export declare const postRequest: (url: string, options: HttpOptions) => Promise<any>;
export {};
