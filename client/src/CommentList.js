import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        } else if (comment.status === 'pending') {
            content = 'Comment awaiting moderation.'
        } else {
            content = 'This comment has been banned.'
        }

        return (
            <li key={comment.id}>
                {content}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {renderedComments}
            </ul>
        </div>
    );
}

export default CommentList
