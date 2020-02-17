import React from 'react';
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card";

class RepoDetails extends React.Component {
    render(){
        console.log(this.props.eventKey)
        return (
            <Accordion.Collapse eventKey={this.props.eventKey}>
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        );
    }
}

export default RepoDetails;
