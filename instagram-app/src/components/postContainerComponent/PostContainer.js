import React from 'react';
import PostHeader from '../postContainerComponent/PostHeader';
import CommentSection from '../commentComponent/CommentSection';

class PostContainer extends React.Component {
    render() {
        return (
            <div className="postContainer">
                <PostHeader />
                {this.props.dummyData.map(element => <CommentSection key={element.id} commentData={element} />)}
            </div>
        )
    }
}

export default PostContainer;