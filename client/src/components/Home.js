/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

import { Container, Row, Col, Button } from "reactstrap";
import "../css/home.css";

class Home extends Component {
  state = {
    selectedOption: ""
  };

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
            <h3>A non-profit tutoring project.</h3>
          </div>
        </div>
        <Container>
          <div className="hero-search-box">
          <form
            action="/search"
            method="GET"
          >
            <Row className="center-block">
                    <input type="hidden" name="filter" value="subject" />
                    <Select required
                      className="hero__search-input"
                      name="subjectid"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={[
                        // TODO: query
                        { value: "1", label: "Math" },
                        { value: "2", label: "Physics" },
                        { value: "3", label: "Chemistry" }
                      ]}
                    />
                  <button type="submit" className="btn btn-danger">
                    Search
                  </button>
            </Row>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
