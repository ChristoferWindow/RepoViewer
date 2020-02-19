import React, { Component } from 'react';
import ReposList from "../repo/ReposList";
import SearchForm from "./repoSearch/SearchForm";
import NavBar from "../navbar/NavBar";
import Container from "react-bootstrap/Container";
import ReposListingHeader from "../repo/ReposListingHeader";
import Sorting from "./sort/Sorting";

class RepoView extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Container>
                    <SearchForm/>
                    <Sorting/>
                    <ReposListingHeader/>
                    <ReposList/>
                </Container>
            </>
        )
    }
}

export default RepoView