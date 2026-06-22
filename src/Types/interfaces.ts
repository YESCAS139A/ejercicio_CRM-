import type { ReactNode } from "react"

export interface userInfo {
    id: number;
    name: string;
    userName: string; 
    email: {
        direction: string;
    };
    webSite: string;
    phone: {
        number: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipCode: string; 
        geo: {
            lat: string;
            lng: string; 
        };
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    initials?: string; 
}

export interface postUser {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface postUser {
    userId: number,
    id: number,
    title: string,
    body: string
};

export interface photos {
    albumId: number,
    id : number,
    title: string,
    url: URL,
    thumbnailUrl: URL
}

export interface allusers {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface comments {
    postId: number,
    id : number,
    name: string,
    email: string,
    body: string
}

export interface albums {
    userId : number,
    id : number,
    title: string
}

export interface searchBarProps {
    onSearch: (value: string) => void
}

export interface summaryConv {
    id: number,
    name: string,
    initials: string,
    messaje: string
}

export interface contact {
    id: number;
    name: string;
    initials: string; 
    email: string;
    city: string;
}

export interface ModalProps {
    children: ReactNode;
    title?: string
}

export interface postViews {
    id : number,
    name: string,
    title: string,
    message: string
}