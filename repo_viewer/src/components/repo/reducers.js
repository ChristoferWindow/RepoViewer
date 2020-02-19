// reducer.js

import * as types from "./consts/actionTypes";

const reposInitialState = {
    pending: false,
    repos: [],
    error: null,
}

const reposDetailsInitialState = {

}
export function reposReducer(state = reposInitialState, action) {
    switch(action.type) {
        case types.FETCH_REPOS_PENDING:
            return {
                ...state,
                pending: true,
                error: false
            }
        case types.FETCH_REPOS_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
                repos: action.repos
            }
        case types.FETCH_REPOS_ERROR:
            return {
                ...state,
                pending: false,
                error: true,
                errorInfo: action.error
            }
        default:
            return state;
    }
}

/** TODO fix saving repoDetails, to save it to store as [{repoName: repoDetails}] **/
export function reposDetailsReducer(state = [], action) {
    switch(action.type) {
        case types.FETCH_REPO_DETAILS_PENDING:
            return {
                ...state,
                pending: true,
                error: false
            }
        case types.FETCH_REPO_DETAILS_SUCCESS:
            return [
                ...state,
                {
                    repoName: action.repoName,
                    repoDetails: action.repoDetails
                }
            ]
        case types.FETCH_REPO_DETAILS_ERROR:
            return {
                ...state,
                pending: false,
                error: true,
                errorInfo: action.error
            }
        default:
            return state;
    }
    
}

export function sortReposByReducer(state = {sortReposBy: 'forksCount-asc'}, action) {
    if (action.type === types.SORT_REPOS_BY) {
        return {
            ...state,
            sortReposBy: action.sortReposBy
        }
    }
    return state;
}

export const getRepos = state => state.repos.repos;
export const getReposPending = state => state.repos.pending;
export const getReposError = state => state.repos.error;

export const getRepoDetails = state => state.reposDetails.repos;
export const getRepoDetailsPending = state => state.reposDetails.pending;
export const getRepoDetailsError = state => state.reposDetails.error;

export const getSortReposBy = state => state.sortReposBy.sortReposBy;