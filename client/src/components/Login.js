import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { submitLogin } from "../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isGoing: true,
      //numberOfGuests: 2
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("clicked");
    this.props.submitLogin();
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
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
export default connect(null, { submitLogin })(Login);
