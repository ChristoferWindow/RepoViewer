import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchRepos} from '../../redux/reposFunctions';
import {getReposError, getRepos, getReposPending} from '../../redux/reducers';
import ReposList from "./ReposList";
import NavBar from "../../App";
import SearchForm from "./repo_search/SearchForm";

class RepoView extends Component {
    constructor(props) {
        super(props);
        // this.shouldComponentRender = this.shouldComponentRender.bind(this);

    }

    componentWillMount() {
        const {fetchRepos} = this.props;
        fetchRepos();
    }

    shouldComponentRender() {
        const {formSubmitted} = this.props;
        if(this.formSubmitted === false) return false;
        // more tests
        return true;
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


const mapStateToProps = state => ({
    error: getReposError(state),
    repos: getRepos(state),
    pending: getReposPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRepos: fetchRepos
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepoView);
