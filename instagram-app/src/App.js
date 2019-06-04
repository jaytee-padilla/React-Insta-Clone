import React from 'react';
import './App.scss';
import dummyData from './dummy-data.js';
import SearchBar from './components/searchBarComponent/SearchBar';
import PostContainer from './components/postContainerComponent/PostContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Instagram Clone</h1>
        <SearchBar />
        <PostContainer dummyData={this.state.data} />
      </div>
    )
  }
}

export default App;
