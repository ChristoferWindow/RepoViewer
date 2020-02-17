import React from 'react';
import Repo from "./Repo";
import {getRepos, getReposError, getReposPending} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {fetchReposAction} from "../../redux/reposFunctions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ReposList extends React.Component {

    shouldComponentRender = () => {
        const {formSubmitted} = this.props;
        const {repos} = this.props;
        console.log('render');
        console.log(repos);
        if(this.formSubmitted === false) return false;
        // more tests
        return true;
    }

    render(){
        if(this.props.pending) return (
            <div className={"text-center"}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );

        if(this.props.error) return (
            <Button variant="danger" className={"text-center"}>Couldn't fetch repos</Button>
        );

        const {repos} = this.props;
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

