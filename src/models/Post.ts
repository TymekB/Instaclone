class Post {
    id: number;
    userId: number;
    title: string;

    constructor(id: number, userId: number, title: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
    }
}

export default Post;
