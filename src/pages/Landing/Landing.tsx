import React, { useState } from "react";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import Styles from "./Landing.module.scss";
import ListView from "./components/ListView/ListView";
import AutoSuggestion from "./components/AutoSuggestion/AutoSuggestion";
import ListViewProps from "./components/ListView/ListView";
import { SearchList } from "./Landing.constant";
import RewardsOffers from "./components/Rewards&Offers/Rewards&Offers";
import CloseIcon from '../../assets/close.svg';

const Landing: React.FC = () => {
    const [filteredData,setFilteredData]=useState<any[]>([]);
    const [searchText, setSearchText] = useState("");

    const handleFilteredData=(e:any)=>{
        const wordSearched=e.target.value
        setSearchText(wordSearched)
        const updatedfilted=SearchList.filter((item:any)=>{
          return item.title.toLowerCase().includes(wordSearched.toLowerCase());
        });
        if(wordSearched==""){
          setFilteredData([])}
        else{
          setFilteredData(updatedfilted)}
      }

    return (
        <Layout>
            <Container className={Styles.landingPageWrapper}>
                <Row className={Styles.row}>
                    <Col >
                        <InputGroup className={Styles.searchInput}>
                            <FormControl
                                className={Styles.input}
                                type="text"
                                placeholder="Lorem Ipsum in Las Vegas"
                                aria-label="Search"
                                aria-describedby="search"
                                value={searchText}
                                onChange={handleFilteredData}
                            />
                            {searchText.length===0?"":<img className={Styles.closeIcon} src={CloseIcon} alt="close-icon" onClick={() => {setSearchText("") ;setFilteredData([])}} />}
                        </InputGroup>
                    </Col>
                    <Col lg={2}>
                        <Button size="lg" className={Styles.button} variant="primary" id="search-button">
                            Search
                        </Button>
                    </Col> 
                    {filteredData.length!==0 && <AutoSuggestion filtered={filteredData}/>}
                    <p id="search-info" className={Styles.infoText}>50 Results for Lorem Ipsum in Las Vegas</p>
                </Row>
                <Container className={Styles.landingPageItems}>
                    <Row className={Styles.row}>
                        <ListView list={SearchList} />
                    </Row>
                </Container>
                <Row className={Styles.row}>
                    <RewardsOffers />
                </Row>
            </Container>
        </Layout>
    )
}

export default Landing;