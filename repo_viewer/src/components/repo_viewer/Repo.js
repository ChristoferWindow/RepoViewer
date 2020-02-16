import React from 'react';
import RepoHeader from './RepoHeader';
import ReopDetails from './RepoDetails';

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
