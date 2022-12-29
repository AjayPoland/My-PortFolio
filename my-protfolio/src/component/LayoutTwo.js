import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

//Bootstrap styling.
import 'bootstrap/dist/css/bootstrap.min.css'
//external css styling.
import '../css/LayoutTwo.css'


const styleObj2={
    
}
const styleObj3={
    
}
function LayoutTwo() {
  return (
    <Container fluid className='demo'>
        <Row className="welcome">
            <Col className=''>
                    <h1>welcome</h1>
                </Col>
        </Row>
        <Row className='profile-pic'>
            <Col className='' sm={5} md={5}><h1>Profile Picture</h1></Col>
            <Col className='border border-secondary border-2' sm={7} md={7}>
            <h1>All about me! </h1>
            </Col>
        </Row>
        <Row className="contect">
            <Col className=''>
                <h2>Contect Here</h2>
            </Col>
        </Row>
        <Row>
            <Col className='p-4 text-bg-info fw-bold '>Thank You for Visiting!</Col>
        </Row>
    </Container>
  )
}

export default LayoutTwo
