import React from 'react';
import Repo from "./Repo";
import {getRepos, getReposError, getReposPending} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {fetchReposAction} from "../../redux/reposFunctions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

class ReposList extends React.Component {
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
                null
            );
        }

        if (Array.isArray(repos)) {
            console.log('Jest array');
            console.log(repos)
            const versionControlItems = repos.map((versionControlItem, index) =>
                <Repo repo={versionControlItem} eventKey={index}></Repo>
            );

            return (
                <Accordion>
                    <Card>
                        {versionControlItems}
                    </Card>
                </Accordion>
            );
        }
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

