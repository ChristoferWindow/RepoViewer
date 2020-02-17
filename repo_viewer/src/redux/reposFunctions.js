// fetchRepos.js

import {
    fetchReposPending,
    fetchReposSuccess,
    fetchReposError,
    fetchRepoDetailsPending,
    fetchRepoDetailsSuccess, fetchRepoDetailsError
} from './actions';

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

export function fetchRepo(versionControl, userName, repoName) {
    return dispatch => {
        dispatch(fetchRepoDetailsPending());
        fetch(baseUrl + '/' + versionControl + '/users/' + userName + '/repos/' + repoName, {mode:"cors"})
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchRepoDetailsSuccess(repoName, res));
                return res;
            })
            .catch(error => {
                dispatch(fetchRepoDetailsError(error));
            })
    }
}
