import Comment from "../models/Comment";

const GetComments = async (): Promise<Comment[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const comments = await response.json();

    return comments.map((comment: Comment) => {
        return new Comment(comment.id, comment.postId, comment.email, comment.body);
    });
}

const AddComment = async (comment: Comment) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    return await response.json();
}

export {GetComments, AddComment};
