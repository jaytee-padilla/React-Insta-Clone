import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
    render() {
        return (
        <div className="commentContainer">
            <span className="username">{this.props.commentData.username}</span>
            <p className="commentText">{this.props.commentData.text}</p>
        </div>
        )
    }
}

export default Comment;