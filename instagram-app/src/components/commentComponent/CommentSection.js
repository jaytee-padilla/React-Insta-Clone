import React from 'react';
import './CommentSection.scss';
import uuid from 'uuid';

class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        newComment: ''
    }

    addNewComment = event => {
        event.preventDefault();
        
        const newComment = {
            username: 'Jaytee',
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
            <div className="commentSectionContainer">
                    {this.state.comments.map((comment, index) => {
                        return (
                            <React.Fragment>
                                <h3>{comment.username}</h3>
                                <p>{comment.text}</p>
                            </React.Fragment>
                        )
                    })}

                    <p className="time-stamp">{this.props.timestamp}</p>
                    <form onSubmit={this.addNewComment}>
                        <input 
                            type="text" name="newComment"
                            value={this.state.newComment}
                            onChange={this.changeHandler}
                            placeholder="add a comment..."
                        />
                    </form>
            </div>
        )
    }
}

export default CommentSection;