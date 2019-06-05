import React from 'react';
import './PostContainer.scss';
import PostHeader from './PostHeader';
import CommentSection from '../commentComponent/CommentSection';

class PostContainer extends React.Component {
    render() {
        return (
                <div className="post-container">

                    {this.props.filteredPosts.length === 0 ? this.props.data.map(post => {
                        return (
                            <React.Fragment>
                                <header>
                                    <img src={post.thumbnailUrl} alt="User thumbnail" />
                                    <h3>{post.username}</h3>
                                </header>

                                <img src={post.imageUrl} alt="main image" />

                                <section className="likeBar">
                                    {post.likes} likes
                                </section>

                                <CommentSection comments={post.comments} timestamp={post.timestamp} />
                            </React.Fragment>
                        )
                    }) : this.props.filteredPosts.map(post => {
                        return (
                            <React.Fragment>
                                <header>
                                    <img src={post.thumbnailUrl} alt="User thumbnail" />
                                    <h3>{post.username}</h3>
                                </header>

                                <img src={post.imageUrl} alt="main image" />

                                <section className="likeBar">
                                    {post.likes} likes
                                </section>

                                <CommentSection comments={post.comments} timestamp={post.timestamp} />
                            </React.Fragment>
                        )
                    })
                }

                </div>
        )
    }
}

export default PostContainer;