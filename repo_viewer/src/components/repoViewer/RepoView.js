import React, { Component } from 'react';
import ReposList from "../repo/ReposList";
import SearchForm from "./repoSearch/SearchForm";
import NavBar from "../navbar/NavBar";
import Container from "react-bootstrap/Container";
import ReposListingHeader from "../repo/ReposListingHeader";
import Sorting from "./sort/Sorting";

class RepoView extends Component {
    constructor(props) {
        super(props);
        this.state = { orderBy: null};
    }
    handleChange = (newValue) => {
        this.state.orderBy = newValue;
    }

    render() {
        return (
            <>
                <NavBar/>
                <Container>
                    <SearchForm/>
                    <Sorting onChange={this.handleChange}/>
                    <ReposListingHeader/>
                    <ReposList orderBy={this.state.orderBy}/>
                </Container>
            </>
        )
    }
}

export default RepoView