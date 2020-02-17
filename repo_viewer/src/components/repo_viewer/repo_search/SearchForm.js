import React from "react";
import {fetchReposAction} from "../../../redux/reposFunctions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import * as VersionControlTypes from "./versionControlTypes";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            versionControl: VersionControlTypes.VERSION_CONTROL_TYPES_LIST[0],
            userName: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name);
        console.log(this.state.versionControl)
        console.log(this.state.userName)
        if (!this.state.userName.trim()) {
            return
        }

        this.props.submitForm(this.state.versionControl , this.state.userName);
    }
    onChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render(){
        /** TODO in future query API for available Version Control Services **/
        const versionControlItems = VersionControlTypes.VERSION_CONTROL_TYPES_LIST.map((versionControlItem) =>
            <option
                value={versionControlItem}
                key={versionControlItem}
            >
                {versionControlItem}
            </option>
        );

        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} className="justify-content-md-center">
                        <Col sm="2">
                            <Form.Control
                                size="sm"
                                as="select"
                                name="versionControl"
                                onChange={this.onChange}
                                value={versionControlItems[0]}
                            >
                            {versionControlItems}
                            </Form.Control>
                        </Col>
                        <Col sm="4">
                            <Form.Control
                                size="sm"
                                type="text"
                                name="userName"
                                placeholder="Type in user name"
                                onChange={this.onChange}
                            >
                            </Form.Control>
                        </Col>
                        <Col sm="2">
                            <Button
                                disabled={this.props.pending}
                                size="sm"
                                variant="primary"
                                type="submit"
                            >
                                Search
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    pending: state.pending
})


const mapDispatchToProps = dispatch => {
    return {
        submitForm: (versionControl, userName) => dispatch(fetchReposAction(versionControl, userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
