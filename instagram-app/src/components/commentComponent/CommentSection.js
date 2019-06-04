import React from 'react';
import Comment from './Comment';
import uuid from 'uuid';

class CommentSection extends React.Component {
    render() {
        return (
            <div className="commentSectionContainer">
                {/* <Comment commentData={this.props.commentData} /> */}

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