import React from "react";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import App from "./App";

const Root = props => {
    const store = configureStore();

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default Root