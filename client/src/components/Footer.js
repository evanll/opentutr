import React, { Component } from "react";

import {
  Container,
  Row,
  Col
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row className="footer__main">
            <Col lg={3}>
              <ul>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </Col>
            <Col lg={3}>
              <i className="fab fa-2x fa-facebook-square"></i>
              <i className="fab fa-2x fa-twitter-square"></i>
              <i className="fab fa-2x fa-google-plus-square"></i>
            </Col>
            <Col lg={3}>
              <img className="footer__logo" src="../assets/images/logo-nt.svg" alt="logo"/>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row className ="footer__copyright-block">
            <Col xs={12}>
              <p className="footer__copyright-text text-center">Copyright © 2018 <a href="">opentutr.com</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
