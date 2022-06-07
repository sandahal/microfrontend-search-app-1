import React from "react";
import { Navbar, Container, Nav, Col, Dropdown } from "react-bootstrap";
import Styles from "./TopNavbar.module.scss";

const TopNavbar: React.FC = () => {
    return (
        <Navbar>
            <Container fluid>
                <Nav className={Styles.nav}>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle className={Styles.navButton} size="lg" variant="outline-light"> Book Now </Dropdown.Toggle>
                            <Dropdown.Menu  >
                                <Dropdown.Item href="https://www.mgmresorts.com/book-room/region">Hotel</Dropdown.Item>
                                <Dropdown.Item href="https://www.mgmresorts.com/en/entertainment.html">Shows</Dropdown.Item>
                                <Dropdown.Item href="https://www.mgmresorts.com/en/restaurants.html">Dining</Dropdown.Item>
                                <Dropdown.Item href="https://www.mgmresorts.com/en/groups-and-weddings/group-vacations.html">Group Vacations</Dropdown.Item>
                                <Dropdown.Item href="https://pools.mgmresorts.com/">Cabanas</Dropdown.Item>
                                <Dropdown.Item href="https://vacationsbymgmresorts.poweredbygps.com/lp/deals">Air + Hotel</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/destinations.html">Resorts</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/entertainment.html">Entertainment</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/restaurants.html">Dining</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/things-to-do/pools.html">Pools</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/casino.html">Casino</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/things-to-do.html">Things to do</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/groups-and-weddings.html">Groups & Weddings</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/mgm-rewards.html">MGM Rewards</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="https://www.mgmresorts.com/en/offers.html">Offers</Nav.Link>
                    </Col>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default TopNavbar