const AUTH = 'g_chat_auth';

export const setAuth = (token: string) => {
    localStorage.setItem(AUTH, token);
};

export const removeAuth = () => {
    localStorage.removeItem(AUTH);
};

export const getToken = (): string => {
    return localStorage.getItem(AUTH) || '';
};

export const isLogin = () => {
    return !!getToken();
};
