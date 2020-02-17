import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchRepos} from '../../redux/reposFunctions';
import {getProductsError, getProducts, getProductsPending} from 'reducer';

import LoadingSpinner from './SomeLoadingSpinner';
import ReposList from "./ReposList";
import NavBar from "../../App";
import SearchForm from "./repo_search/SearchForm";

class ProductView extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);

    }

    componentWillMount() {
        const {fetchRepos} = this.props;
        fetchRepos();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {repos, error} = this.props;

        if(!this.shouldComponentRender()) return <LoadingSpinner />

        return (
            <>
                <NavBar/>
                <SearchForm/>
                {error && <span className='product-list-error'>{error}</span>}
                <ReposList repos={repos} />
            </>
        )
    }
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRepos: fetchRepos
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepoView);
