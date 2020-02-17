import React from 'react';
import Repo from "./Repo";
import {getRepos, getReposError, getReposPending} from "../../redux/reducers";
import {bindActionCreators} from "redux";
import {fetchReposAction} from "../../redux/reposFunctions";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

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
        // const {repos} = this.props;
        const repos = [
            {
                "name": "keras",
                "owner": {
                    "ownerLogin": "aa",
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/28438?v=4"
                },
                "fork": true,
                "forksCount": 1,
                "language": "Python"
            },
            {
                "name": "tensorflow",
                "owner": {
                "ownerLogin": "aa",
                    "avatarUrl": "https://avatars1.githubusercontent.com/u/28438?v=4"
            },
                "fork": true,
                "forksCount": 0,
                "language": "C++"
            }
        ];

        const versionControlItems = repos.map((versionControlItem, index) =>
            <Repo repo={versionControlItem} eventKey={index}></Repo>
        );


        if(!this.shouldComponentRender()) return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
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

