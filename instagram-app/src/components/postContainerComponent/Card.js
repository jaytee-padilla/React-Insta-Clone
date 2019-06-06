import React, { Component } from 'react';
import './Card.scss';
import CommentSection from '../commentComponent/CommentSection';

export default class Card extends Component {
    state = {
        likes: this.props.post.likes,
        liked: false
    }

    likeBtnHandler = event => {
        this.state.liked ? this.setState({likes: this.state.likes - 1, liked: false}) : this.setState({likes: this.state.likes + 1, liked: true})
        // this.setState({liked: !this.state.liked});
    }

    render() {
        return (
            <div className="cardComponentContainer">
                
                    <header>
                        <img src={this.props.post.thumbnailUrl} alt="User thumbnail" />
                        <h3>{this.props.post.username}</h3>
                    </header>

                    <img src={this.props.post.imageUrl} alt="main image" />

                    <section className="likeBar">
                        <div className="likeBarIcons">
                            <span onClick={this.likeBtnHandler}>
                                <i className={this.state.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
                            </span>
                            <i className="far fa-comment fa-lg fa-flip-horizontal"></i>
                        </div>

                        {this.state.likes} likes
                    </section>

                    <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} />
                
            </div>
        )
    }
}
