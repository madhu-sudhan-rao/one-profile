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

export interface UserDetails {
    fullName: string;
    username: string;
    email: string;
    mobile: string;
    gender: string;
    birthday: string;
    instagram: string;
    twitter: string;
    snapchat: string;
    linkedin: string;
    github: string;
  }
  