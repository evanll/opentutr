import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchTutor } from "../actions"

import { Container, Row, Col, Button } from "reactstrap";
import "../css/home.css";

class Home extends Component {
  componentDidMount() {
    //this.props.fetchTutor(this.props.match.params.tutorId);
    // console.log(this.props);
  }

  render() {
    return (
      <div className="bg">
        <Container>
          <div className = "centre">
              <form className = "navbar-form navbar-right" action = "/search">
                <h1 className="text-warning"> The <span className = "strong"> ONLY </span> way to find a service</h1>
                <div className = "input-group">
                  <input type = "text" className = "form-control" placeholder= "Search"/>
                  <span className="input-group-addon"></span>
                  <button type = "submit" className = "btn btn-danger">Search</button>
                </div>
              </form>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //return { tutor: state.viewTutor };
}

export default Home;
//export default Profile;
