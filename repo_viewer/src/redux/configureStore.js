import {applyMiddleware, compose, createStore} from "redux";
import {repoDetailsReducer, reposReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = () => {
    const composedEnhancers = compose(
        applyMiddleware(thunk),
        repoDetailsReducer
    )
    const store = createStore(
        reposReducer,
        composeWithDevTools(
           composedEnhancers,
    ));

    return store;
};

export default configureStore;