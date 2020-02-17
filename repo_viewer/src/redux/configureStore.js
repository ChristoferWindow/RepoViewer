import { createStore } from "redux";
import {reposReducer} from "./reducers";

export const configureStore = () => {
    const store = createStore(reposReducer);

    return store;
};

export default configureStore;