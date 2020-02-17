import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"
import {fetchRepoDetailsAction, fetchReposAction} from "./functions/reposFunctions";
import {connect} from "react-redux";
import RepoDetails from "./RepoDetails";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
                <Row>
                    <Col className={"text-center"}>{this.props.name}</Col>
                    <Col className={"text-center"}>{this.props.language}</Col>
                    <Col className={"text-center"}>{this.props.isFork ? 'yes' : 'no'}</Col>
                    <Col className={"text-center"}>{this.props.forksCount}</Col>
                </Row>



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

