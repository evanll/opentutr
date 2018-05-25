import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import 'react-select/dist/react-select.css';


//import { fetchTutor } from "../actions"

import { Container, Row, Col, Button } from "reactstrap";
import "../css/home.css";

class Home extends Component {
    state = {
    selectedOption: '',
  }
  componentDidMount() {
    //this.props.fetchTutor(this.props.match.params.tutorId);
    // console.log(this.props);
  }

  handleChange = (selectedOption) => {
  this.setState({ selectedOption });
  console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="bg">
        <Container>
          <div className = "centre">
              <form className = "navbar-form navbar-right" action = "/search">
                <h1 className="text-warning"> The <span className = "strong"> ONLY </span> way to find a service</h1>
                <div className = "input-group">
                      <Select
                         name="form-field-name"
                         value={selectedOption}
                         onChange={this.handleChange}
                         options={[
                           { value: 'german', label: 'German' },
                           { value: 'french', label: 'French' },
                           { value: 'evan', label: 'evan' },
                           { value: 'hairy', label: 'hairy' },
                           { value: 'french', label: 'French' },
                           { value: null, label: 'what would you like to learn?' },
                         ]}
                       />
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
