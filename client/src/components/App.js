import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "axios";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/search" component={Search}/>
            <Route exact path="/tutor" component={Profile}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
