import React, { Component } from "react";
import { connect } from "react-redux";
import { searchTutor } from "../actions";
import { Link } from "react-router-dom";

import { calculateReviewStars } from "../js/helpers";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import "../css/search.css";

class Search extends Component {
  componentDidMount() {
    this.props.searchTutor(1);
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

  renderList() {
    return this.props.tutors.map(tutor => {
      return (
        <Container key={tutor._id} className="search-result__box">
          <Row>
            <Card body>
              <Row>
                <Col lg={3}>
                  <Link to={"/tutor/" + tutor.tutor_id}>
                    <img
                      className="rounded img-fluid"
                      src="/assets/images/default_user_md.png"
                    />
                  </Link>
                </Col>
                <Col lg={7}>
                  <div className="float-left">
                    <CardTitle className="search-result__title">
                      <Link to={"/tutor/" + tutor.tutor_id}>
                        {tutor.firstname} {tutor.lastname}
                      </Link>
                    </CardTitle>
                    <p>
                      <i className="fas fa-map-marker" /> {tutor.location} <br/>
                      <i className="fas fa-book" /> {tutor.subject}
                    </p>
                  </div>
                  <div className="float-right">
                    <div className="search-result__stars">
                      {calculateReviewStars(tutor.totalrating)}
                    </div>
                    <p className="search-result__reviews text-right">
                      ({tutor.totalreviews} reviews)
                    </p>
                  </div>
                  <div className="clearfix" />
                  <CardText>
                    {tutor.description}...
                  </CardText>
                  <Link to={"/tutor/" + tutor.tutor_id}>
                    <Button className="btn-primary">Book Now</Button>
                  </Link>
                </Col>
                <Col lg={2}>
                  <p className="text-center search-result__price">£{tutor.rate}</p>
                </Col>
              </Row>
            </Card>
          </Row>
        </Container>
      );
    });
  }
}

function mapStateToProps(state) {
  return { tutors: state.searchTutor };
}

export default connect(mapStateToProps, { searchTutor })(Search);
