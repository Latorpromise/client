import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import { BsSearch } from "react-icons/bs";
import '../App.css'


function SearchField() {
    return (
    <>
    <Container>
      <Row className='searchfield-row'>
        <Col sm={12} md={6}>
        <InputGroup className="search-bar mb-3">
        <Form.Control
          className=''
          placeholder="What are you looking for?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className='search-btn' id="button-addon2">
        <BsSearch />
        </Button>
        {/* <div>
        <Button className='sell-btn'>Sell</Button>{' '}
        <Button className='sell-btn'>Buy</Button>{' '}
        </div> */}
      </InputGroup>
        </Col>
      </Row>
    
    </Container>
      
    </>
    )
}

export default SearchField;