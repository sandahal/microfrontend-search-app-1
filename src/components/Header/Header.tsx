import React from "react";

import HeaderStyles from './Header.module.scss';
import headerLogo from "../../assets/mainLogo.svg"
import rewardsIcon from "../../assets/rewardsIcon.svg"
import searchIcon from "../../assets/searchIcon.svg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Navbar className={HeaderStyles.header} expand="lg">
            <Container fluid>
                <Nav.Link href="https://www.mgmresorts.com/en.html" >
                    <img src={headerLogo} alt="header-logo" />
                </Nav.Link>
                <Nav className={HeaderStyles.navb}>
                    <Nav.Link href="https://www.mgmresorts.com/en/groups-and-weddings.html">Meetings</Nav.Link>
                    <NavDropdown
                        id="nav-dropdown-company"
                        title="Company"
                        menuVariant="light"
                    >
                        <NavDropdown.Item href="https://www.mgmresorts.com/en/app.html">Mobile App</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.mgmresorts.com/en/company.html">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="https://careers.mgmresorts.com/global/en">Careers</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.mgmresorts.com/reservation/find/">Find Reservation</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.mgmresorts.com/identity/?client_id=mgm_app_web&redirect_uri=https%3A%2F%2Fwww.mgmresorts.com%2Faccount%2Fauth%2Flogin%3Fpath%3D%2Faccount%2Ftrips%2F&scopes=loyalty:profile:read">Trips</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.mgmresorts.com/en/company/esg.html">Social Impact & Sustainability</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.mgmresorts.com/en/gamesense.html">GameSense</NavDropdown.Item>
                        <NavDropdown.Item href="https://investors.mgmresorts.com/investors/overview/default.aspx">Investors</NavDropdown.Item>
                        <NavDropdown.Item href="http://newsroom.mgmresorts.com/mgm-resorts">News & Press</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.mgmresorts.com/en/company/esg/fostering-diversity-equity-and-inclusion/supplier-diversity/supplier-information.html">Global Procurement</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="https://www.mgmresorts.com/identity/?client_id=mgm_app_web&redirect_uri=https%3A%2F%2Fwww.mgmresorts.com%2Fen%2Fauth%2Flogin.html%3FreturnUri%3D%252Fen%252Fsign-in%252Fprofile.html&scopes=loyalty:profile:read">
                        <img src={rewardsIcon} alt="mgm-rewards" />
                        Sign in
                    </Nav.Link>
                    <Nav.Link href="#">
                        <img src={searchIcon} alt="search-icon" />
                    </Nav.Link>

                </Nav>
            </Container>
        </Navbar>
        // </div>
    )
}

export default Header;