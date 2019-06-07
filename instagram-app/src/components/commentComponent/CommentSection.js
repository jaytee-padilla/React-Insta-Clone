import React from 'react';
import styled from 'styled-components';
import {Username} from '../../Styles/Reusables';
import uuid from 'uuid';

const CommentSectionWrapper = styled.div`
    padding: 0 25px;
`;

const CommentWrapper = styled.div`
    display: flex;
    padding: 5px 0;
`;

const CommentText = styled.p`
    font-size: 14px;
    padding-left: 5px;
    margin-block-start: 0;
    margin-block-end: 0;
`;

const TimeStamp = styled.p`
    font-size: 12px;
    color: darkgrey;
    margin-top: 5px;
    margin-bottom: 15px;
`;

const AddCommentInput = styled.input`
    width: 100%;
    padding: 15px 0;
    font-size: 14px;
    border: 0;
    border-top: 1px solid lightgrey;
`;

class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        newComment: ''
    }

    addNewComment = event => {
        event.preventDefault();
        
        const newComment = {
            username: 'jaytee',
            text: this.state.newComment
        }

        this.setState({comments: [...this.state.comments, newComment], newComment: ''})
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <CommentSectionWrapper>
                    {this.state.comments.map((comment, index) => {
                        return (
                            <CommentWrapper>
                                <Username>{comment.username}</Username>
                                <CommentText>{comment.text}</CommentText>
                            </CommentWrapper>
                        )
                    })}

                    <TimeStamp>{this.props.timestamp}</TimeStamp>

                    <form onSubmit={this.addNewComment}>
                        <AddCommentInput
                            type="text" name="newComment"
                            value={this.state.newComment}
                            onChange={this.changeHandler}
                            placeholder="Add a comment..."
                        />
                    </form>
            </CommentSectionWrapper>
        )
    }
}

export default CommentSection;