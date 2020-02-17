import {applyMiddleware, createStore} from "redux";
import {reposReducer} from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = () => {
    const store = createStore(
        reposReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
    ));

    return store;
};

export default configureStore;