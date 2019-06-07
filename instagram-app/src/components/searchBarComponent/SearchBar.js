import React from 'react';
import './SearchBarIcons.scss';
import styled from 'styled-components';

const SearchBarComponentContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
`;

const SearchBarContainer = styled.div `
    margin-left: 45px;
`;

class SearchBar extends React.Component {
    render() {
        return (
            <SearchBarComponentContainer>
                <div className="Logo">
                    <i className="fab fa-instagram fa-3x"></i>
                </div>

                <SearchBarContainer>
                    <input
                        type="text"
                        name="search"
                        onChange={this.props.searchFilter}
                        placeholder="Search">
                    </input>
                </SearchBarContainer>

                <div className="navLinkIcons">
                    <i className="far fa-compass fa-lg"></i>
                    <i className="far fa-heart fa-lg"></i>
                    <i className="far fa-user fa-lg"></i>
                </div>
            </SearchBarComponentContainer>
        )
    }
}

export default SearchBar;