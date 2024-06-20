import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons">
            <a href="https://www.artstation.com/hazel_cooper"><img src={navIcon1} alt="" /></a>
                <a href="https://x.com/hazelcoope88939"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/hazel_cooper__7/"><img src={navIcon3} alt="" /></a>
                <a href="https://www.reddit.com/user/SweetClock8661/"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
