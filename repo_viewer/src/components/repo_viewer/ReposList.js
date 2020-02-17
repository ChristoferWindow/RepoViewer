import React from 'react';
import Repo from "./Repo";
import {getRepos, getReposError, getReposPending} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {fetchReposAction} from "../../redux/reposFunctions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";

class ReposList extends React.Component {

    shouldComponentRender = () => {
        const {formSubmitted} = this.props;
        const {repos} = this.props;
        console.log('render');
        console.log(repos);
        if(this.formSubmitted === false) return false;
        // more tests
        return true;
    }

    render(){
        const {repos} = this.props;
        const versionControlItems = repos.map((versionControlItem) =>
            <Repo repo={versionControlItem}></Repo>
        );

        if(!this.shouldComponentRender()) return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );

        return (
            <>
                {versionControlItems}
            </>
        );
    }
}

const mapStateToProps = state => ({
    error: getReposError(state),
    repos: getRepos(state),
    pending: getReposPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRepos: fetchReposAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReposList);

