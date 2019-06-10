import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const PostContainerWrapper = styled.div``;

class PostContainer extends React.Component {
    render() {
        return (
                <PostContainerWrapper>

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

                </PostContainerWrapper>
        )
    }


}

export default PostContainer;