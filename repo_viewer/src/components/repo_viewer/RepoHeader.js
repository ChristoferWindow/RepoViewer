import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import {fetchRepoDetailsAction, fetchReposAction} from "../../redux/reposFunctions";
import {connect} from "react-redux";
import RepoDetails from "./RepoDetails";

class RepoHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    loadDetails = () => {
        console.log('click header');
        this.props.loadRepoDetails(this.props.versionControl , this.props.owner, this.props.name);
    }

    render(){
        return (
            <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} onClick={this.loadDetails}>
                Name: {this.props.name}
                Forked: {this.props.fork ? 'yes' : 'no'}
            </Accordion.Toggle>
        );
    }
}

const mapStateToProps = state => ({
    pending: state.pending
})

const mapDispatchToProps = dispatch => {
    return {
        loadRepoDetails: (versionControl, userName, name) => dispatch(fetchRepoDetailsAction(versionControl, userName, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoHeader);

