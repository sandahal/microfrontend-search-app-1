import React from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import Styles from "./Rewards&Offers.module.scss";
import fbLogo from "../../../../../src/assets/fb.jpg";
import instaLogo from "../../../../../src/assets/instagram.jpg";
import ytLogo from "../../../../../src/assets/youtube.jpg"
import twitLogo from "../../../../../src/assets/twitter.jpg"
import pinLogo from "../../../../../src/assets/pinterest.jpg"

const RewardsOffers = () => {
    return <Row className={Styles.row}>
        <Col lg={4} className={Styles.col}>
            <span>Reservations</span>
            <a href="tel:+18557886775"><span>855.788.6775</span></a>
            <br></br>
            <p>For The Cosmopolitan of Las Vegas, call <a href="tel:+18554350005">855.435.0005</a>.</p>
            <p>Telephone booking fee may be applied.</p>
        </Col>
        <Col lg={3} className={Styles.col}>
            <span>MGM Rewards Mastercard</span>
            <a href="https://www.mgmresorts.com/en/mgm-rewards/mgm-rewards-mastercard-1b.html"><Button variant="primary">LEARN MORE</Button></a>
        </Col>
        <Col lg={2} className={Styles.col}>
            <span>Receive offers</span>
            <a href="https://www.mgmresorts.com/identity/signup"><Button variant="primary">LEARN MORE</Button></a>
        </Col>
        <Col lg={3} className={Styles.col}>
            <span>Social</span>
            <Row lg={5} className={Styles.rowsocial}>
                <a href="https://www.facebook.com/mgmresorts/"><img src={fbLogo} alt="fb-logo" /></a>
                <a href="https://twitter.com/MGMResortsIntl"><img src={twitLogo} alt="twitter-logo" /></a>
                <a href="https://www.youtube.com/user/mlifetv"><img src={ytLogo} alt="youtube-logo" /></a>
                <a href="https://www.instagram.com/mgmresortsintl/"><img src={instaLogo} alt="instagram-logo" /></a>
                <a href="https://in.pinterest.com/MGMResorts/_created/"><img src={pinLogo} alt="pinterest-logo" /></a>
            </Row>
        </Col>
    </Row >
}

export default RewardsOffers;