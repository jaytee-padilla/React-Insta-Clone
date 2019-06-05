import React from 'react';
import './PostContainer.scss';
import PostHeader from './PostHeader';
import CommentSection from '../commentComponent/CommentSection';

class PostContainer extends React.Component {
    render() {
        return (
            <div className="postContainer">
                <PostHeader thumbnailUrl={this.props.dummyData.map(element => element.thumbnailUrl)} username={this.props.dummyData.map(element => element.username)} />

                {this.props.dummyData.map(element => <CommentSection key={element.id} commentData={element} />)}
            </div>
        )
    }
}

export default PostContainer;