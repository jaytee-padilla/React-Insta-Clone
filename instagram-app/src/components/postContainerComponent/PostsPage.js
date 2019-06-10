import React, { Component } from 'react'
import dummyData from '../../dummy-data';
import SearchBar from '../searchBarComponent/SearchBar';
import PostContainer from './PostContainer';

export default class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            search: '',
            filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({data: dummyData});
    }

    changeHandler = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

    searchFilter = event => {
    const filtered = this.state.data.filter(post => post.username.toLowerCase().includes(event.target.value.toLowerCase()));

    this.setState({filteredPosts: filtered});
    }

    render() {
    return (
        <div className="App">
            <SearchBar newSearch={this.state.search} searchFilter={this.searchFilter}/>
            <PostContainer data={this.state.data} filteredPosts={this.state.filteredPosts} searchFilter={this.searchFilter} likeBtnHandler={this.likeBtnHandler} liked={this.state.liked} />
        </div>
    )
    }
}
