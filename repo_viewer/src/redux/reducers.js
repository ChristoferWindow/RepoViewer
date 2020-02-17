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

export function repoDetailsReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_REPO_DETAILS_PENDING:
            return {
                ...state,
                pending: true,
                error: false
            }
        case types.FETCH_REPO_DETAILS_SUCCESS:
            state.repoDetails.set(action.repoName, action.repoDetails)
            return {
                ...state,
                pending: false,
                error: false,
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

export const getRepos = state => state.repos;
export const getReposPending = state => state.pending;
export const getReposError = state => state.error;

export const getRepoDetails = state => state.repoDetails;
export const getRepoDetailsPending = state => state.pending;
export const getRepoDetailsError = state => state.error;