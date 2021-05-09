import { IncomingHttpHeaders } from "http";
import { getToken } from "./auth";

interface HttpOptions {
    addAuth?: boolean;
    headers?: IncomingHttpHeaders
    data?: any;
}

export const getRequest = async (url: string, options?: HttpOptions) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    options?.addAuth && (headers.append('Authorization', `Bearer ${getToken()}`));
    const response = await fetch(url, {
        method: 'GET',
        headers
    });
    return response.json();
};

export const postRequest = async (url: string, options?: HttpOptions) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    options?.addAuth && (headers.append('Authorization', `Bearer ${getToken()}`));

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(options?.data || {}) // body data type must match "Content-Type" header
    });
    return response.json();
};
