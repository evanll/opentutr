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
import { submitReview } from "../actions";
// redirection after login
import { withRouter } from "react-router-dom";

class ReviewSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ""
    };

    // to retain this object instance when the function is passed to the handle
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    // bypass default browser action
    event.preventDefault();
    // history is attached by withRouter
    this.props.submitReview(this.state, this.props.history);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    // deconstruct variables from state ES6 syntax
    const { review } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label> Tutoring Name </Label>
          </FormGroup>
          <FormGroup>
            <Label> Subject </Label>
          </FormGroup>
          <FormGroup>
            <Label for="review">Ranking</Label>
            <Input
              type="review"
              value={review}
              onChange={this.onChange}
              name="review"
              id="review"
              placeholder="Enter review"
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
export default connect(null, { submitReview })(withRouter(ReviewSend));
