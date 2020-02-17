import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"

class RepoHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>
                Name: {this.props.name}
                Forked: {this.props.fork ? 'yes' : 'no'}
            </Accordion.Toggle>
        );
    }
}

export default RepoHeader;
