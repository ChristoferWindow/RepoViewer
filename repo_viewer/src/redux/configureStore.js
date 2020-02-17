import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {repoDetailsReducer, reposReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = () => {
    const reducers = combineReducers({
        reposReducer,
        repoDetailsReducer,
    })

    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk),
    ));

    return store;
};

export default configureStore;