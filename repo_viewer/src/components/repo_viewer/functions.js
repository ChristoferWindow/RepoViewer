// fetchRepos.js

import {fetchReposPending, fetchReposSuccess, fetchReposError} from './sactions';

function fetchRepos() {
    return dispatch => {
        dispatch(fetchReposPending());
        fetch('https://exampleapi.com/products')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchReposSuccess(res.products);
                return res.products;
            })
            .catch(error => {
                dispatch(fetchReposError(error));
            })
    }
}

export default fetchRepos;

// fetchRepos.js

import {fetchReposPending, fetchReposSuccess, fetchReposError} from 'actions';

function fetchRepos() {
    return dispatch => {
        dispatch(fetchReposPending());
        fetch('https://exampleapi.com/products')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchReposSuccess(res.products);
                return res.products;
            })
            .catch(error => {
                dispatch(fetchReposError(error));
            })
    }
}

export default fetchRepos;