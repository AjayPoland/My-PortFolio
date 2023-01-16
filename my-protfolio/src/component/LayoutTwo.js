import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

//Bootstrap styling.
import 'bootstrap/dist/css/bootstrap.min.css'
//external css styling.
import '../css/LayoutTwo.css'
//images files
import ProfilePic from '../component/ProfilePic';


function LayoutTwo() {
  return (
    <Container fluid className='demo' gap={2} >
        <Row className="welcome">
            <Col className=''>
                    <h1>welcome</h1>
                </Col>
        </Row>
        <Row className='profile-pic'>
            <Col className='' sm={3} md={3}><ProfilePic/></Col>
            <Col className='border border-secondary border-2' sm={9} md={9}>
            <h1>All about me! </h1>
            </Col>
        </Row>
        <Row className="contect">
            <Col className='mt-3'>
            </Col>
        </Row>
        <Row>
            <Col className='p-4 text-bg-info fw-bold '>Thank You for Visiting!</Col>
        </Row>
    </Container>
  )
}

export default LayoutTwo
