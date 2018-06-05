/* Written by
 * Evan Lalopoulos <evan.lalopoulos.2017@my.bristol.ac.uk>
 * Harrison Boyns <hb17757.2017@my.bristol.ac.uk>
 * A project for Web Technologies
 * University of Bristol, May 2018
 * Copyright (C) - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 */
 
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { submitRegistration } from "../actions";
// redirection after login
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      isTutor: "1"
    };

    // to retain this object instance when the function is passed to the handle
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    // bypass default browser action
    event.preventDefault();
    // history is attached by withRouter
    this.props.submitRegistration(this.state, this.props.history);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    // deconstruct variables from state ES6 syntax
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      isTutor
    } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              required
              type="text"
              value={firstname}
              onChange={this.onChange}
              name="firstname"
              id="firstname"
              placeholder="Enter firstname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              required
              type="text"
              value={lastname}
              onChange={this.onChange}
              name="lastname"
              id="lastname"
              placeholder="Enter lastname"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              required
              type="email"
              value={email}
              onChange={this.onChange}
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              required
              type="text"
              value={username}
              onChange={this.onChange}
              name="username"
              id="username"
              placeholder="Enter username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              required
              type="password"
              value={password}
              onChange={this.onChange}
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="areYouATutor">
              Register as Tutor?
              <br/>
              <Input
                type="checkbox"
                value={isTutor}
                onChange={this.onChange}
                name="isTutor"
                id="isTutor"
                placeholder="Are you a tutor?"
                style = {{margiLeft: '0em'}}
              />
            </Label>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
//export default Login;
export default connect(null, { submitRegistration })(withRouter(Register));
