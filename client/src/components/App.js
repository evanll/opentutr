import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// required by components to perform actionsS
import { connect } from "axios";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import Profile from "./Profile";
import Reviews from "./Reviews";
import Login from "./Login";
import Register from "./Register";
import ProfileUpdate from "./UpdateProfile";
import ReviewSend from "./ReviewSend";

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
            <Route exact path="/reviews" component={Reviews}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/updateProfile" component={ProfileUpdate}/>
            <Route exact path="/updatereview" component={ReviewSend}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
