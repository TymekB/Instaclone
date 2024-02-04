class Comment
{
    id: number;
    postId: number;
    email: string;
    body: string;

    constructor(id: number, postId: number, email: string, body: string) {
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.body = body;
    }
}

export default Comment;
