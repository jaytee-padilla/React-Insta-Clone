import React from 'react';
import './PostHeader.scss';
import uuid from 'uuid';

function PostHeader(props) {
    return (
        <div className="postHeaderContainer">
            {props.thumbnailUrl.map(element => {
                return (
                    <div className="thumbnailImg">
                        <img src={element} alt="User's thumbnail" />

                        {props.username.map(element => {
                            return (
                                <div className="thumbnailUsername" key={uuid.v4()}>
                                    <span>{element}</span>
                                </div>
                            )
                        })}
                    </div>
                )
            })}

            {/* {props.username.map(element => {
                return (
                    <div className="thumbnailUsername" key={uuid.v4()}>
                        <span>{element}</span>
                    </div>
                )
            })} */}
        </div>
    )
}

export default PostHeader;