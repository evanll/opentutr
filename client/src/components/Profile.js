import React, { Component } from "react";
import "../css/profileCard.css";
import { Container, Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { fetchTutor } from "../actions"

class Profile extends Component {
  componentDidMount() {
    this.props.fetchTutor();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row className = "justify-content-center profile-bottom profile-container__pad" style={{height: "60px"}}>
            <div className="bs-calltoaction bs-calltoaction-default ">
              <h3 className = "profile-pad"> Book a top rated math tutor <a href="#" className="btn m-0 btn-danger btn-md">Message me</a></h3>
            </div>
          </Row>
        </Container>
        <Container>
          <Row className = "profile-container__pad">
            <Col lg={3} xs={12}>
              <div className = "text-left">
                <Card className="profile-card__style">
                  <img className="card-img-top" src="/template/assets/default_user.png" alt="profile image"/>
                  <p className = "profile-card__text" >
                    <i className = "fas fa-map-marker"></i> <span> Bristol</span>
                  </p>
                  <div className = "profile-card__stars">
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "fas fa-star"></i>
                    <i className = "far fa-star"></i>
                    <p>
                      <span className = "profile__review-count">(30 Reviews)</span>
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
                <h3 className = "profile__title">First Last</h3>
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
                  <h3>£50.00</h3>
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
  return { profile: state.profile };
}

export default connect(mapStateToProps, { fetchTutor })(Profile);
//export default Profile;
