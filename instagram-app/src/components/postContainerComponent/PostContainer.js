import React from 'react';
import './PostContainer.scss';
import CommentSection from '../commentComponent/CommentSection';
import Card from './Card';

class PostContainer extends React.Component {
    render() {
        return (
                <div className="post-container">

                    {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                        return (
                            <Card post={post} />
                        )
                    }) : this.props.filteredPosts.map(post => {
                        return (
                            <Card post={post} />
                        )
                    })
                }

                </div>
        )
    }


}

export default PostContainer;