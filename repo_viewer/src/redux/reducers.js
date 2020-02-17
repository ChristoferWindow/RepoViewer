// reducer.js

import * as types from "./types";

const initialState = {
    pending: false,
    repos: [],
    error: null
}

export function reposReducer(state = initialState, action) {
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

export function reposDetailsReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_REPO_DETAILS_PENDING:
            return {
                ...state,
                pending: true,
                error: false
            }
        case types.FETCH_REPO_DETAILS_SUCCESS:
            return {
                ...state,
                pending: false,
                error: false,
                repos: {repoName : action.repoName, repoDetails: action.repoDetails}
            }
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

export const getRepos = state => state.repos.repos;
export const getReposPending = state => state.repos.pending;
export const getReposError = state => state.repos.error;

export const getRepoDetails = state => state.reposDetails.repos;
export const getRepoDetailsPending = state => state.reposDetails.pending;
export const getRepoDetailsError = state => state.reposDetails.error;