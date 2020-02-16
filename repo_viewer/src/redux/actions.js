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
