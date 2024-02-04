import Comment from "../../models/Comment";
import React, {useEffect, useState} from "react";
import {AddComment, GetComments} from "../Comment/Comment";
import User from "../../models/User";
import {GetLoggedUser} from "../User/User";

const Comments = (props: any) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loggedUser, setLoggedUser] = useState<User | null>(null);

    const [postComments, setPostComments] = useState<Comment[]>([]);
    const [commentContent, setCommentContent] = useState('');

    const addComment = () => {
        if (loggedUser === null || postComments === undefined) {
            return;
        }
        const comment = new Comment(postComments.length + 1, props.postId, loggedUser.username, commentContent);

        AddComment(comment).then(() => {
            postComments.push(comment);

            setPostComments(postComments);
            setCommentContent('');
        });
    }

    useEffect(() => {
        GetComments().then((comments: Comment[]) => {
            const filteredComments = comments.filter((comment: Comment) => comment.postId === props.postId);
            setPostComments(filteredComments);
        });

        GetLoggedUser().then((user: User) => {
            setLoggedUser(user);
        });
    }, []);

    return (
        <div>
            <button className="btn p-0">
                <span className="text-muted">{postComments?.length} comments</span>
            </button>
            {postComments?.map((comment: Comment) => (
                <div>
                    <strong className="d-block">{comment.email}</strong>
                    <span>{comment.body}</span>
                </div>
            ))}

            <div className="position-relative comment-box mt-2">
                <input className="w-100 border-0 p-3 input-post"
                       placeholder="Add a comment..." value={commentContent}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setCommentContent(event.target.value);
                       }}/>
                <button className="btn btn-primary position-absolute btn-ig" onClick={() => {
                    addComment();
                }}>Add
                </button>
            </div>
        </div>
    );

}

export default Comments
