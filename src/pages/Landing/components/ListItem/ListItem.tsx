import React from "react";
import { Col, Row } from "react-bootstrap";
import { ListItemType } from "../ListView/ListView";
import Styles from "./ListItem.module.scss";

export type ListItemProps = {
    data: ListItemType;
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
    return <Row className={Styles.card}>
        <Col lg={3}>
            <img src={data.image} alt="item-ig" className={Styles.cardImage} />
        </Col>
        <Col lg={9}>
            <h4 className={Styles.cardTitle}>{data.title}</h4>
            <p className={Styles.cardSubtitle}>{data.subtitle}</p>
            <p className={Styles.cardBody}>{data.content}</p>
        </Col>
    </Row>
}

export default ListItem;