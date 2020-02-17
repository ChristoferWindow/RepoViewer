// fetchRepos.js

import {fetchReposPending, fetchReposSuccess, fetchReposError} from './actions';

const baseUrl = 'http://localhost:8000/api';

export function fetchReposAction(versionControl, userName) {
    return dispatch => {
        dispatch(fetchReposPending());
        fetch(baseUrl + '/' + versionControl + '/users/' + userName + '/repos', {mode:"cors"})
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchReposSuccess(res));
                return res;
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
                dispatch(fetchReposSuccess(res.repos));
                return res.repos;
            })
            .catch(error => {
                dispatch(fetchReposError(error));
            })
    }
}
