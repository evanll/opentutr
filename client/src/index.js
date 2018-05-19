// react boilerplate
import React from "react";
import ReactDOM from "react-dom";

// redux boilerplate
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

// style imports
import "./css/bootstrap.css";
import "./css/main.css";
import "./css/style.css";

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  // if there's a state update the provider will update all children
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
//registerServiceWorker();
