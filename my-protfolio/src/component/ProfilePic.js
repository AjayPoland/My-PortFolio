import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import LoginMain from './login/LoginMain';

//styling bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
//profile image
import myPic from '../images/mypic.jpg'

function ProfilePic() {
  const [showCard, setShowCard] = useState(true);
  return (
    <>
    {showCard?(
    <Card className='container-fluid px-0 mt-2 border-0' style={{background: "transparent"}}>
        <Card.Img variant='top' src={myPic} className='rounded-circle fluid' />
        <Card.Body>
            <Card.Title className='text-start h2 fw-bold text-decoration-underline text-light'>Ajay Manger</Card.Title>
            <Card.Text className='text-start h6'>:-Front-End Developer <br/>&nbsp;&nbsp;Fresher</Card.Text>
        </Card.Body>
        <Card.Link>
        <Button variant='primary' className='mb-2' style={{width:"100px",float:'right'}} onClick={()=>setShowCard(false)}>Sign in</Button>
        </Card.Link>
        {/* <Card.Footer>Profile</Card.Footer> */}
    </Card>
    ):(<LoginMain showHome={setShowCard}/>)
    }
    </>
  )
}

export default ProfilePic
