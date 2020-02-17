import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reposDetailsReducer, reposReducer} from "../components/repo/reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            repos: reposReducer,
            reposDetails: reposDetailsReducer,
        }),
        composeWithDevTools(applyMiddleware(thunk),
    ));

    return store;
};

export default configureStore;