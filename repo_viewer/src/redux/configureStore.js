import {applyMiddleware, createStore} from "redux";
import {reposReducer} from "./reducers";
import thunk from "redux-thunk";

export const configureStore = () => {
    const store = createStore(
        reposReducer,
        applyMiddleware(thunk)
    );

    return store;
};

export default configureStore;