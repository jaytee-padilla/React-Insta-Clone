import React from 'react';
import PostsPage from './components/postContainerComponent/PostsPage';
import Login from './components/login/Login';
import withAuthenticate from './authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
