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
import { submitLogin } from "../actions";
// redirection after login
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    // to retain this object instance when the function is passed to the handle
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    // bypass default browser action
    event.preventDefault();
    // history is attached by withRouter
    this.props.submitLogin(this.state, this.props.history);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    // deconstruct variables from state ES6 syntax
    const { username, password } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input required
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
          <Button>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
//export default Login;
export default connect(null, { submitLogin })(withRouter(Login));
