import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Styles from "./ListView.module.scss";
import NextIcon from "../../../../assets/next-arrow.svg";
import PrevIcon from "../../../../assets/prev-arrow.svg";
import { Col, Row } from "react-bootstrap";

export type ListViewProps = {
    list: ListItemType[];
}

export type ListItemType = {
    title: string;
    subtitle: string;
    content: string;
    image: string;
}

const ListView: React.FC<ListViewProps> = ({ list }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = list.length;

    return <>
        <div className={Styles.listWrapper}>
            {
                list.map((item: ListItemType) => (
                    <ListItem data={item} />
                ))
            }
        </div>
        <Row className="justify-content-md-center">
            <div className={Styles.paginationInfo}>
                <span>PAGE </span>
                <span>{currentPage}/{totalPages}</span>
                <div className={Styles.arrow} id="arrow-icons">
                    <img src={PrevIcon} alt="prev" />
                    <img src={NextIcon} alt="next" />
                </div>
            </div>
        </Row>
    </>
}

export default ListView;