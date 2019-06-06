import React from 'react';

const withAuthenticate = PostPage => Login =>
class extends React.Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        localStorage.getItem('username') ? this.setState({isLoggedIn: true}) : this.setState({isLoggedIn: false})
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? <PostPage /> : <Login />}
            </div>
        )
    }
}; 

export default withAuthenticate;