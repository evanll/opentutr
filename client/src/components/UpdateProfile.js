import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadPhoto } from "../js/helpers";
import { sendFile } from "../js/helpers";

import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { updateProfile } from "../actions";
// redirection after login
import { withRouter } from "react-router-dom";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fileToUpoad: null
    };

    // to retain this object instance when the function is passed to the handle
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    // bypass default browser action
    event.preventDefault();
    // history is attached by withRouter
    this.props.updateProfile(this.state, this.props.history);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value
    })
  }

  fileReaderHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      fileToUpoad : event.target.files[0]
    })
  }

  fileToTheData = () => {
    console.log('The file is the following' + this.state.fileToUpoad);
    console.log(this.state.fileToUpoad);
    sendFile(this.state.fileToUpoad);
  }

  render() {
    // deconstruct variables from state ES6 syntax
    const { subject, firstname, lastname, price, description } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="subject">Subject</Label>
            <Input
              type="text"
              value={subject}
              onChange={this.onChange}
              name="subject"
              id="subject"
              placeholder="Enter subject"
            />
            <div>
            <Label>ProfilePicture</Label>
            <input type = "file" onChange = {this.fileReaderHandler}/>
            <button onClick = {this.fileToTheData}> Upload Image </button>
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="firstname">Firstname</Label>
            <Input
              type="firstname"
              value={firstname}
              onChange={this.onChange}
              name="firstname"
              id="firstname"
              placeholder="Enter firstname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Lastname</Label>
            <Input
              type="lastname"
              value={lastname}
              onChange={this.onChange}
              name="lastname"
              id="lastname"
              placeholder="Enter lastname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Bio</Label>
            <Input
              type="description"
              value={description}
              onChange={this.onChange}
              name="description"
              id="description"
              placeholder="Enter description"
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input
              type="price"
              value={price}
              onChange={this.onChange}
              name="price"
              id="price"
              placeholder="Enter Price"
            />
          </FormGroup>
          <Button>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
//export default Login;
export default connect(null, { updateProfile })(withRouter(UpdateProfile));
