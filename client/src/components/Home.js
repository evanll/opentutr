import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "react-select/dist/react-select.css";

//import { fetchTutor } from "../actions"

import { Container, Row, Col, Button } from "reactstrap";
import "../css/home.css";

class Home extends Component {
  state = {
    selectedOption: ""
  };
  componentDidMount() {
    //this.props.fetchTutor(this.props.match.params.tutorId);
    // console.log(this.props);
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <div className="overlay" />
        <div className="bg">
          <div class="hero">
            <h1>Find your Tutor</h1>
            <h3>An open source project</h3>
          </div>
        </div>
        <Container>
          <div className="hero-search-box">
            <form
              className="navbar-form navbar-right"
              action="/search"
              method="GET"
            >
              <div className="form-group">
                <input type="hidden" name="filter" value="subject" />
                <Select
                  className="hero__search-input"
                  name="subjectid"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={[
                    // TODO: query
                    { value: "1", label: "German" },
                    { value: "2", label: "French" },
                    { value: "3", label: "evan" },
                    { value: "4", label: "hairy" },
                    { value: "5", label: "French" }
                  ]}
                />
                <span className="input-group-addon" />
                <button type="submit" className="btn btn-danger">
                  Search
                </button>
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
