import React from 'react';
import Repo from "./Repo";
import {getRepos, getReposError, getReposPending} from "./reducers";
import {bindActionCreators} from "redux";
import {fetchReposAction} from "./functions/reposFunctions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

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
            console.log(sort);

            /** TODO sorting functions on redux dispatch **/
            if (sort && null !== sort) {
                switch (sort) {
                    case "forksCount-asc":
                        reposSorted = repos.sort( (a, b) => {return a.forksCount - b.forksCount})
                    case "forksCount-desc":
                        reposSorted = repos.sort( (a, b) => {return a.forksCount - b.forksCount})
                    case "name-asc":
                        reposSorted = repos.sort((a, b) => {return a.toString().localeCompare(b)})
                    case "name-desc":
                        reposSorted = repos.sort((a, b) => {return b.toString().localeCompare(a)})
                }
            }
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
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRepos: fetchReposAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReposList);

