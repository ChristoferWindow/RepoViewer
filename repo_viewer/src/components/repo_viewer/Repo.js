import React from 'react';
import RepoHeader from './RepoHeader';
import RepoDetails from './RepoDetails';

class Repo extends React.Component {
    render(){
        return (
           <>
               <RepoHeader/>
               <RepoDetails/>
           </>
        );
    }
}

export default Repo;
