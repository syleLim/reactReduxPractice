import React from "react"
import ReactDOM from "react-dom"
import App from "./container/App.js"

import { createStore } from "redux"
import reducers from "./reducer"
import { Provider } from "react-redux"

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));

