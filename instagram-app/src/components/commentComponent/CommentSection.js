import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    render() {
        return (
            <div className="commentSectionContainer">
                <Comment commentData={this.props.commentData} />
            </div>
        )
    }
}

export default CommentSection;