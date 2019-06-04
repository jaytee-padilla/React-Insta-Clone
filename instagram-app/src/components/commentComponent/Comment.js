import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
    render() {
        return (
        <div className="commentContainer">
            {this.props.commentData.comments.map((element, index) => {
                return (
                    <div className="comment">
                        <span className="username">{element.username}</span>
                        <p className="commentText">{element.text}</p>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Comment;