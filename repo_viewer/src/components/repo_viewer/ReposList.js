import React from 'react';
import Repo from "./Repo";

class ReposList extends React.Component {

    render(){
        const {repos} = this.props;
        const versionControlItems = this.repos.map((versionControlItem) =>
            <Repo></Repo>
        );

        if(!this.shouldComponentRender()) return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );

        return (
            <>
                {versionControlItems}
            </>
        );
    }
}

export default ReposList;
