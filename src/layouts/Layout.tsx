import React from "react"
import { Stack } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TopNavbar from "../components/TopNavbar/TopNavbar";

import LayoutStyles from "./Layout.module.scss";

const Layout: React.FC<any> = ({ children }) => {
    return <>
        <Stack gap={3} className={LayoutStyles.headerWrapper}>
            <Header />
            <TopNavbar />
        </Stack>
        {children}
        <Footer />
        {/* <div className={LayoutStyles.footer}>
        </div> */}
    </>
}

export default Layout;