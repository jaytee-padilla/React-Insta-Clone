import React from 'react';
import './CommentSection.scss';
import Comment from './Comment';
import uuid from 'uuid';

class CommentSection extends React.Component {
    render() {
        return (
            <div className="commentSectionContainer">

                {this.props.commentData.comments.map((element) => {
                    return (
                        <Comment commentData={element} key={uuid.v4()} />
                    )
                })}
            </div>
        )
    }
}

export default CommentSection;