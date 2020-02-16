// fetchRepos.js

import {fetchReposPending, fetchReposSuccess, fetchReposError} from './actions';

const baseUrl = 'localhost:8000/api';

export function fetchRepos(versionControl, userName, repoName) {
    return dispatch => {
        dispatch(fetchReposPending());
        fetch(baseUrl + '/' + versionControl + '/users/' + userName + '/repos')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchReposSuccess(res.repos)
                return res.repos;
            })
            .catch(error => {
                dispatch(fetchReposError(error));
            })
    }
}

export function fetchRepo() {
    return dispatch => {
        dispatch(fetchReposPending());
        fetch('https://exampleapi.com/repos')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchReposSuccess(res.repos)
                return res.repos;
            })
            .catch(error => {
                dispatch(fetchReposError(error));
            })
    }
}
