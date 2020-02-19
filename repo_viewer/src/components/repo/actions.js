import * as types from "./consts/actionTypes";

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

export function fetchRepoDetailsPending() {
    return {
        type: types.FETCH_REPO_DETAILS_PENDING
    }
}
export function fetchRepoDetailsSuccess(repoName, repoDetails) {
    return {
        type: types.FETCH_REPO_DETAILS_SUCCESS,
        repoName: repoName,
        repoDetails: repoDetails
    }
}
export function fetchRepoDetailsError(error) {
    return {
        type: types.FETCH_REPO_DETAILS_ERROR,
        error: error
    }
}

export function sortReposBy(sortBy) {
    return {
        type: types.SORT_REPOS_BY,
        sortReposBy: sortBy
    }
}