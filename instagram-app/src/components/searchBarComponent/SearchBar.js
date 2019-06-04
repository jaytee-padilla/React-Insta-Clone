import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchBarContainer">
                <div className="Logo">
                    <i className="fab fa-instagram fa-3x"></i>
                </div>

                <div className="searchBar">
                    <input type="text" placeholder="Search"></input>
                </div>

                <div className="navLinkIcons">
                    <i className="far fa-compass fa-lg"></i>
                    <i className="far fa-heart fa-lg"></i>
                    <i className="far fa-user fa-lg"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;