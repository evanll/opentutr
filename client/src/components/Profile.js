import React, { Component } from "react";
import "../css/profileCard.css";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchTutor } from "../actions"
import { calculateReviewStars } from "../js/helpers";
import { getMethod } from "../js/helpers";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchTutor(1);
  }

  render() {
    return (
      <div>
        <Container>
          <Row className = "profile-container__pad">
            <Col lg={3} xs={12}>
              <div className = "text-left">
                <Card className="profile-card__style">
                  <img className="card-img-top" src={getMethod(this.props.tutor.firstname)} alt="profile image"/>
                  <p className = "profile-card__text" >
                    <h3 className = "profile__title">{this.props.tutor.firstname} {this.props.tutor.lastname}</h3>
                    <i className = "fas fa-map-marker"></i> <span> {this.props.tutor.location}</span>
                  </p>
                  <div className = "profile-card__stars">
                    {calculateReviewStars(this.props.tutor.totalrating)}
                    <p>
                      <span className = "profile__review-count">({this.props.tutor.totalreviews} Reviews)</span>
                    </p>
                  </div>
                  <div className="text-center">
                    <a href="#" className="btn btn-danger btn-md">Message me</a>
                  </div>
                </Card>
              </div>
            </Col>
            <Col lg={7} xs={12}>
              <div className = "text-left2">
                <h3 className = "profile__title">Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, eum illud ignota et, ne semper dicunt mea. An has doctus volumus similique, ad eirmod theophrastus vituperatoribus per. Cum an assum graeco mollis, sale causae diceret te sea. Est summo quando apeirian an, eum dicta numquam te. Ei civibus epicuri pri, eum audire quaeque et. Platonem tincidunt signiferumque pri at, no est verterem lucilius, augue quaeque temporibus ea per.
                  Graeco sanctus civibus qui no. Te nam omnes facilis dissentias, ea verear aperiam assueverit ius, at vel omnis nominavi officiis. Eum vide augue prodesset ne. Ei cetero aliquip eligendi pri, clita delectus vim ne, natum animal labores mei in.Assum possit integre at mel, ut eos vitae tractatos petentium. Case choro mel no, vim in magna erroribus. His cu semper ornatus, per ut solum delenit patrioque. Sensibus molestiae pro ut, esse elit ut nam.
                  At brute impedit per. Tation verterem per ei. Vel in munere tempor, te audire nonumes signiferumque pri. Ad ornatus quaestio has, est movet indoctum ut. In tota apeirian eam. Ad sit populo quodsi.
                </p>
              </div>
            </Col>
            <div className = "profile-column3__border">
              <Col lg={2} xs={12}>
                <div className = "text-center">
                  <h3>£{this.props.tutor.rate}</h3>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("map state called");
  return { tutor: state.viewTutor };
}

export default connect(mapStateToProps, { fetchTutor })(Profile);
//export default Profile;
