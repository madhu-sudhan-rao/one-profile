export interface User {
    id: string;
    realName: string;
    userName: string;
    details: UserDetail[];
}

export interface UserDetail {
    icon: string;
    value: string;
    url?: string;
}