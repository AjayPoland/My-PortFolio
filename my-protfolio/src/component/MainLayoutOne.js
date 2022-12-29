import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"

export function MainLayoutOne(){
    const margine='5px'
    return(
        <Container fluid>
            <Row style={{height:'3em', marginBottom:`${margine}`}}>
                <Col className='border border-primary border-2'>Menu bar</Col>
            </Row>
            <Row style={{height:'15rem', marginBottom:`${margine}`}}>
                <Col className='border border-dark border-2'>Slide Image shower</Col>
            </Row>
            <Row  style={{height:'30rem', marginBottom:`${margine}`}}>
                <Col className='border border-danger border-2' sm={'2'} md={'2'}>left side bar</Col>
                <Col className='border border-warning border-2  'sm={'8'} md={'8'}>Main content</Col>
                <Col className='border border-info border-2' sm={"2"} md={'2'} >right side bar</Col>
            </Row>
            <Row style={{height:'17rem', marginBottom:`${margine}`}} >
                <Col className='border border-secondary border-2 mr-3'sm={'5'} md={'5'}>left article</Col>
                <Col className='border border-success border-2'sm={'7'} md={'7'}>right article</Col>
            </Row>
            <Row style={{height: '10em'}}>
                <Col className='border border-dark border-2'>footer</Col>
            </Row>
        </Container>
    );
}