import React, { Component } from 'react';
import '../../Styles/FontAwesomeIcons.scss';
import styled from 'styled-components';
import {Username} from '../../Styles/Reusables';
import CommentSection from '../commentComponent/CommentSection';

const CardWrapper = styled.div`
    width: 640px;
    margin: 0 auto;
    margin-bottom: 35px;
    border: 1px solid lightgrey;
    border-radius: 5px;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 75px;
`;

const ThumbnailWrapper = styled.div`
    padding-left: 10px;
`;

const ThumbnailImg = styled.img`
    width: 35px;
    border-radius: 100%;
`;

const LikeBarWrapper = styled.div`
    padding: 0px 25px;
    margin-top: 10px;
    margin-bottom: 10px;
    // border: 1px solid red;
`;

const LikeBarIcons = styled.div`
    margin-bottom: 10px;
    // border: 1px solid green;
`;

const LikeBarText = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    // border: 1px solid blue;
`;

export default class Card extends Component {
    state = {
        likes: this.props.post.likes,
        liked: false
    }

    likeBtnHandler = event => {
        this.state.liked ? this.setState({likes: this.state.likes - 1, liked: false}) : this.setState({likes: this.state.likes + 1, liked: true})
    }

    render() {
        return (
            <CardWrapper>
                
                    <HeaderWrapper>
                        <ThumbnailWrapper>
                            <ThumbnailImg src={this.props.post.thumbnailUrl} alt="User thumbnail" />
                        </ThumbnailWrapper>
                        <Username header>{this.props.post.username}</Username>
                    </HeaderWrapper>
                    
                    <img src={this.props.post.imageUrl} alt="main image" />

                    <LikeBarWrapper>
                        <LikeBarIcons>
                            <span onClick={this.likeBtnHandler}>
                                <i className={this.state.liked ? "fas fa-heart fa-lg" : "far fa-heart fa-lg"}></i>
                            </span>
                            <i className="far fa-comment fa-lg fa-flip-horizontal add-comment"></i>
                        </LikeBarIcons>

                        <LikeBarText>
                            {this.state.likes} likes
                        </LikeBarText>
                    </LikeBarWrapper>

                    <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} />
                
            </CardWrapper>
        )
    }
}
