/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// required by components to perform actionsS
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Profile from "./Profile";
import Reviews from "./Reviews";
import Login from "./Login";
import Register from "./Register";
import ProfileUpdate from "./UpdateProfile";
import ReviewSend from "./ReviewSend";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
              <div className="wrapper">
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/tutor/:tutorId" component={Profile}/>
                <Route exact path="/reviews" component={Reviews}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/updateProfile" component={ProfileUpdate}/>
                <Route exact path="/updatereview" component={ReviewSend}/>
              </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// assign action to App as prop
export default connect(null, { fetchUser })(App);
