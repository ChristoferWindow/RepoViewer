import React, {Component} from 'react';
import Accordion from "./RepoHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ReposListingHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
       <>
            <div style={{marginTop : "20px"}}> </div>
            <h2 className={"text-center"}>
                Listing of repos
            </h2>
            <Row>
                <Col className="text-center font-weight-bold">Name: </Col>
                <Col className="text-center font-weight-bold">Language: </Col>
                <Col className="text-center font-weight-bold">Forked: </Col>
                <Col className="text-center font-weight-bold">Forks count: </Col>
            </Row>
       </>
        )
    }
}

export default ReposListingHeader
