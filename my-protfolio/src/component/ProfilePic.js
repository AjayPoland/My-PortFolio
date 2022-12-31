import React from 'react'
import Card from 'react-bootstrap/Card'

//styling bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//profile image
import myPic from '../images/mypic.jpg'

function ProfilePic() {
  return (
    <Card className='container-fluid px-0 mt-2 border-0' style={{background: "transparent"}}>
        <Card.Img variant='top' src={myPic} className='rounded-circle fluid' />
        <Card.Body>
            <Card.Title className='text-start h2 fw-bold text-decoration-underline text-primary'>Ajay Manger</Card.Title>
            <Card.Text className='text-start h6'>:-Front-End Developer <br/>&nbsp;&nbsp;Fresher</Card.Text>
        </Card.Body>
        {/* <Card.Footer>Profile</Card.Footer> */}
    </Card>
  )
}

export default ProfilePic
