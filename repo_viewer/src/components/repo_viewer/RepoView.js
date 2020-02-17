import React, { Component } from 'react';
import ReposList from "./ReposList";
import SearchForm from "./repo_search/SearchForm";
import NavBar from "../navbar/NavBar";

class RepoView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <NavBar/>
                <SearchForm/>
                <ReposList/>
            </>
        )
    }
}

export default RepoView