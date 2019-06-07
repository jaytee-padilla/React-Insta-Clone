import React from 'react';

const withAuthenticate = PostsPage => Login =>
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
                {this.state.isLoggedIn ? <PostsPage /> : <Login />}
            </div>
        )
    }
}; 

export default withAuthenticate;