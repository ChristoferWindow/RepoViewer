import * as types from "./types";

export function fetchReposPending() {
    return {
        type: types.FETCH_REPOS_PENDING
    }
}

export function fetchReposSuccess(repos) {
    return {
        type: types.FETCH_REPOS_SUCCESS,
        repos: repos
    }
}

export function fetchReposError(error) {
    return {
        type: types.FETCH_REPOS_ERROR,
        error: error
    }
}

export function addFormSubmit(submit) {
    return {
        type: types.ADD_FORM_SUBMIT,
        formSubmit: submit
    }
}