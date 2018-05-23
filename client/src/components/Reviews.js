import React, { Component } from "react";
import "../css/search-result.css";
import { connect } from "react-redux";
import { searchReviews } from "../actions"

import { Container, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

class Review extends Component {
  componentDidMount() {
    this.props.searchReviews();
  }

  render() {
    return (
      <div>hello World
        {this.renderList()}
      </div>
    );
  }

  renderList() {
    return this.props.reviews.map(review => {
      return (
        <Container key={review._id}>
          <Row>
            <Card body>
            <CardTitle className="search-result__title">
              {review.reviewRanking} {review.student}
            </CardTitle>
            <p>
            
            </p>
            <CardText>
            </CardText>
            </Card>
          </Row>

          <h1>  hello </h1>
          </Container>

      );
    });
  }




}

  function mapStateToProps(state) {
    return { reviews: state.searchReviews };
  }

  export default connect(mapStateToProps, { searchReviews })(Review);
