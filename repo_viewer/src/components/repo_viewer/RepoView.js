import React, { Component } from 'react';
import ReposList from "./ReposList";
import SearchForm from "./repo_search/SearchForm";
import NavBar from "../navbar/NavBar";
import Container from "react-bootstrap/Container";
import ReposListingHeader from "./ReposListingHeader";

class RepoView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <NavBar/>
                <Container>
                    <SearchForm/>
                    <ReposListingHeader/>
                    <ReposList/>
                </Container>
            </>
        )
    }
}

export default RepoView