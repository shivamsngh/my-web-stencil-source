export interface BlogResponse {
    kind: string;
    items: Array<BlogData>;
    etag: string;
}

export interface BlogData {
    kind: string;
    id: string;
    blog: {
        id: string;
    };
    published: string;
    updated: string;
    etag: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: {
        id: string,
        displayName: string;
        url: string;
        image: {
            url: string;
        }
    };
    replies: {
        totalItems: string;
        selfLink: string;
    };
}
