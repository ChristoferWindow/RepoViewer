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

/** TODO If there will be other versionControl systems, repoName should be unique across services
 *      to do this here needs to be name like "github/userName
 * **/

export function fetchRepo(versionControl, userName, repoName) {
    return dispatch => {
        dispatch(fetchRepoDetailsPending());
        fetch(baseUrl + '/' + versionControl + '/users/' + userName + '/repos/' + repoName, {mode:"cors"})
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                const uniqueRepoName = versionControl + '_' + userName + '_' + repoName
                dispatch(fetchRepoDetailsSuccess(uniqueRepoName, res));
                return res;
            })
            .catch(error => {
                dispatch(fetchRepoDetailsError(error));
            })
    }
}
