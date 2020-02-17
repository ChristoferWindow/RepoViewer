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

export function repoFormReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FORM_SUBMIT:
            return {
                ...state,
                formSubmitted:true,
                formSubmit: action.payload
            }
        default:
            return state;
    }
}

export const getRepos = state => state.repos;
export const getReposPending = state => state.pending;
export const getReposError = state => state.error;