import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import Styles from "./Rewards&Offers.module.scss";

const RewardsOffers = () => {
    return <Row className={Styles.row}>
        <Col lg={3} className={Styles.col}>
            <span>Reservations</span>
            <a href="tel:+18557886775"><span>855.788.6775</span></a>
            <p>Telephone booking fee may be applied.</p>
        </Col>
        <Col lg={2} className={Styles.col}>
            <span>MGM Rewards Mastercard</span>
            <a href="https://www.mgmresorts.com/en/mgm-rewards/mgm-rewards-mastercard-1b.html"><Button variant="primary">LEARN MORE</Button></a>
        </Col>
        <Col lg={2} className={Styles.col}>
            <span>Receive offers</span>
            <a href="https://www.mgmresorts.com/identity/signup"><Button variant="primary">LEARN MORE</Button></a>
        </Col>
        <Col lg={3} className={Styles.col}>
            <span>Social</span>
            <img src="" alt="social-icons" />
        </Col>
    </Row>
}

export default RewardsOffers;