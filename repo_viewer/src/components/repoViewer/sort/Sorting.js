import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form"
import * as sortTypes from "./sortTypes";
import {fetchReposAction} from "../../repo/functions/reposFunctions";
import {connect} from "react-redux";
import {getSortReposBy} from "../../repo/reducers";

class Sorting extends React.Component {
    handleChange = (e) => {
        this.props.sortRepos(e.target.value);
    }
    render(){
        const sortOptions = sortTypes.repoSearchSortTypes.map((sortOption) =>
            <option value={sortOption.value}> {sortOption.name} </option>
        );

        return (
            <Row className = "justify-content-md-center">
                <Col sm="2">
                    <Form.Control
                        as="select"
                        size="sm"
                        name="sortBy"
                        onChange={this.handleChange}
                    >
                        {sortOptions}
                    </Form.Control>

                </Col>
            </Row>
        );
    }
}


const mapStateToProps = state => ({
    pending: state.pending
})


const mapDispatchToProps = dispatch => {
    return {
        sortRepos: (sortType) => dispatch(getSortReposBy(sortType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
