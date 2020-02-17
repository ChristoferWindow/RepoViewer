import React, {Component} from 'react';
import Accordion from "./RepoHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ReposTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
       <>
            <h2 className={"text-center"}>
                Listing of repos
            </h2>
            <Row>
                <Col className="text-center font-weight-bold">Name: </Col>
                <Col className="text-center font-weight-bold">Forked: </Col>
                <Col className="text-center font-weight-bold">Forks count: </Col>
            </Row>
       </>
        )
    }
}

export default ReposTitle
