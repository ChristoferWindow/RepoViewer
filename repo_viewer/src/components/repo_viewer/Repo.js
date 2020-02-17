import React from 'react';
import RepoHeader from './RepoHeader';
import RepoDetails from './RepoDetails';
import Card from "react-bootstrap/Card";

class Repo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
           <Card>
               <RepoHeader
                   name = {this.props.repo.name}
                   owner = {this.props.repo.owner.login}
                   isFork = {this.props.repo.fork}
                   eventKey = {this.props.eventKey}
                   versionControl = "github"
               />
               <RepoDetails
                   eventKey = {this.props.eventKey}
               />
           </Card>
        );
    }
}

export default Repo;
