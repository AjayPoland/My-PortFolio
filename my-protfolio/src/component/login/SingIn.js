import React from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

//image
import myPic from '../../images/mypic.jpg'

//styling bootsrtap css
import 'bootstrap/dist/css/bootstrap.min.css'

//external styling css
import './css/LoginMain.css'

function SingIn({setInput,handleSubmit,children}) {
  return (
    <>
    <Card className='singin-card border-0 align-items-end'>
    <Card.Img src={myPic} className=' singin-logo rounded-circle align-items-end'/>
    </Card>
      <Form onSubmit={handleSubmit} className='singin-form text-start'>
        <div className='my-2'>
        <Form.Label htmlFor='username'>UserName:</Form.Label>
        <Form.Control type='text' name='username' onChange={setInput} required/>
        </div>
        <div className='my-2'>
        <Form.Label htmlFor='password'>Password:</Form.Label>
        <Form.Control type="password" name='password' onChange={setInput} required/>
        </div>
        <div>
        {children}
        </div>
      </Form>
    </>
  )
}

export default SingIn
