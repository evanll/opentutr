import React, { Component } from "react";
import "../css/search-result.css";
import { connect } from "react-redux";
import { searchTutor } from "../actions";
import { Link } from "react-router-dom";


import { Container, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";

class Search extends Component {
  componentDidMount() {
    this.props.searchTutor();
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
        <Container key={tutor._id}>
          <Row>
            <Card body>
              <Row>
                <Col lg={3}>
                  <Link to={"/tutor/" + tutor.tutor_id}>
                    <img
                      className="rounded img-fluid"
                      src="/assets/default_user_md.png"
                    />
                  </Link>
                </Col>
                <Col lg={7}>
                  <div className="float-left">
                    <CardTitle className="search-result__title">
                      {tutor.firstname} {tutor.lastname}
                    </CardTitle>
                    <p>
                      <i className="fas fa-map-marker" /> Bristol
                    </p>
                  </div>
                  <div className="float-right">
                    <div className="search-result__stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                    <p className="search-result__reviews text-right">
                      (20 reviews)
                    </p>
                  </div>
                  <div className="clearfix" />
                  <CardText>
                    Lorem ipsum dolor sit amet, quot expetendis nec ea. Id has
                    sumo copiosae, eum sonet adipisci quaerendum eu...
                    <Link to={"/tutor/" + tutor.tutor_id}>View example</Link>
                  </CardText>
                  <Button className="btn-primary">Book Now</Button>
                </Col>
                <Col lg={2}>
                  <p className="text-center search-result__price">£{tutor.price}</p>
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
