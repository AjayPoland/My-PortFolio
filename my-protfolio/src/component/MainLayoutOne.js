import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

import "bootstrap/dist/css/bootstrap.min.css"

import '../css/MainLayoutOne.css'
import ManuBar from "./ManuBar";
import LoginMain from "./login/LoginMain";
export function MainLayoutOne(){
    const margine='5px'
    const [triger, setTriger] = useState(false);
    return(
        <div className='body pt-4'>
            <Row>
                <Col><ManuBar triger={setTriger}/></Col>
            </Row>
            <hr className="mt-0"/>
            <Row style={{height:'15rem', width:'auto', marginBottom:`${margine}`}}>
                <Col>Slide Image shower <br/>{triger?(<LoginMain/>):null} </Col>
            </Row>
            <Row  style={{height:'30rem', marginBottom:`${margine}`}}>
                <Col sm={'2'} md={'2'}>left side bar</Col>
                <Col sm={'8'} md={'8'}>Main content</Col>
                <Col sm={"2"} md={'2'} >right side bar</Col>
            </Row>
            <Row style={{height:'17rem', marginBottom:`${margine}`}} >
                <Col sm={'5'} md={'5'}>left article</Col>
                <Col sm={'7'} md={'7'}>right article</Col>
            </Row>
            <Row style={{height: '10em'}}>
                <Col >footer</Col>
            </Row>
        </div>
    );
}