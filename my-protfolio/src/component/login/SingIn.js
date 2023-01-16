import React from 'react'
import Form from 'react-bootstrap/Form'

//styling bootsrtap css
import 'bootstrap/dist/css/bootstrap.min.css'

//external styling css
import './css/LoginMain.css'

function SingIn({setInput,handleSubmit,children}) {
  return (
    <>
      <Form onSubmit={handleSubmit} className='singin-form'>
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
