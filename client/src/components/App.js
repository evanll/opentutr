import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// required by components to perform actionsS
import { connect } from "axios";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Profile from "./Profile";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/search" component={Search}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/tutor/:tutor_id" component={Profile}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
