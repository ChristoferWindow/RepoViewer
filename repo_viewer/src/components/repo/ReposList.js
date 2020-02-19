import React from 'react';
import Repo from "./Repo";
import {getRepos, getReposError, getReposPending, getSortReposBy} from "./reducers";
import {bindActionCreators} from "redux";
import {fetchReposAction, sortReposByAction} from "./functions/reposFunctions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import {
    SORT_BY_FORKS_COUNT_ASC,
    SORT_BY_FORKS_COUNT_DESC,
    SORT_BY_NAME_ASC,
    SORT_BY_NAME_DESC
} from "../repoViewer/sort/sortTypes";
import * as sortTypes from "../repoViewer/sort/sortTypes";
import {sortReposBy} from "./actions";

class ReposList extends React.Component {
    constructor(props){
        super();
        this.state={ orderBy: null }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.orderBy !== this.state.orderBy) {
            let orderBy = this.state.orderBy
            this.setState({orderBy});
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.orderBy !==prevState.orderBy){
            return {orderBy : nextProps.orderBy};
        }
        else return null;
    }

    render(){
        const {pending, error, repos} = this.props;
        if (pending) {
            return (
                <div className={"text-center"}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        }

        if(error) {
            return (
                <Alert variant="danger" className={"text-center"}>
                    Upss we couldn't fetch repos. Check if the username is correct
                </Alert>
            );
        }

        if(!pending && !error && (!repos || repos.length === 0)) {
            return (
                <Alert variant="light" className={"text-center"}>
                    No results found
                </Alert>
            )
        }

        if (Array.isArray(repos)) {
            let reposSorted = repos
            const sort = this.props.sortBy
            
            if (sort && null !== sort) {
                switch (sort) {
                    case SORT_BY_FORKS_COUNT_ASC:
                        reposSorted = repos.slice().sort( (a, b) => {return a.forksCount - b.forksCount})
                        break;
                    case SORT_BY_FORKS_COUNT_DESC:
                        reposSorted = repos.slice().sort( (a, b) => {return b.forksCount - a.forksCount})
                        break;
                    case SORT_BY_NAME_ASC:
                        reposSorted = repos.slice().sort((a, b) => {return a.name.localeCompare(b)})
                        break;
                    case SORT_BY_NAME_DESC:
                        reposSorted = repos.slice().sort((a, b) => {return b.name.localeCompare(a)})
                        break;
                    default:
                        reposSorted = repos;
                }
            }
            console.log(reposSorted);
            const versionControlItems = reposSorted.map((versionControlItem, index) =>
                <Card><Repo repo={versionControlItem} eventKey={index}></Repo></Card>
            );

            return (
                <Accordion>
                    {versionControlItems}
                </Accordion>
            );
        }
    }
}

const mapStateToProps = state => ({
    error: getReposError(state),
    repos: getRepos(state),
    pending: getReposPending(state),
    sortBy: getSortReposBy(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRepos: fetchReposAction,
    sortReposBy: sortReposByAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReposList);

