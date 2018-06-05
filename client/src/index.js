/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
// react boilerplate
import React from "react";
import ReactDOM from "react-dom";

// redux boilerplate
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";

// style imports
import "./css/bootstrap.css";

// custom styling and bootstrap overrides
import "./css/style.css";

// pass the reducers to the store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // if there's a state update the provider will update all children
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
