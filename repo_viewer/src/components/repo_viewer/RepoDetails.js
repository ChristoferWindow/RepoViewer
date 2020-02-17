import React from 'react';
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card";
import {getRepoDetails, getRepoDetailsError, getRepoDetailsPending} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {fetchRepoDetailsAction} from "../../redux/reposFunctions";
import {connect} from "react-redux";
import Spinner from "./ReposList";
import Alert from "react-bootstrap/Alert";

class RepoDetails extends React.Component {
    render(){
        const {pending, error, repo} = this.props;

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
                    Upss we couldn't fetch repo Details.
                </Alert>
            );
        }

        if(!pending && !error && (!repo || repo.length === 0)) {
            return (
                null
            );
        }

        if (Array.isArray(repo)) {
            return (
                <Accordion.Collapse eventKey={this.props.eventKey}>
                    <Card.Body>{this.props.repo.name}</Card.Body>
                </Accordion.Collapse>
            );
        }
    }
}

const mapStateToProps = state => ({
    error: getRepoDetailsError(state),
    repo: getRepoDetails(state),
    pending: getRepoDetailsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRepos: fetchRepoDetailsAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RepoDetails);

