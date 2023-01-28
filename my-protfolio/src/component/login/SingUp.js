import React from 'react';
import Form from 'react-bootstrap/Form';

//styling bootsrtap css
import 'bootstrap/dist/css/bootstrap.min.css'

//external styling css
import '../../css/LoginMain.css'

function SingUp({handleSubmit,setInput,children}) {
  return (
    <div>
      <Form className="singup-form text-start" onSubmit={handleSubmit}>
        <div className='my-2'>
        <Form.Label htmlFor='firstname'>First Name:</Form.Label>
        <Form.Control type='text' name='firstname' onChange={setInput}  required/>
        </div>
        <div className='my-2'>
        <Form.Label htmlFor='lastname'>Last Name:</Form.Label>
        <Form.Control type="text" name='lastname' onChange={setInput} required/>
        </div>
        <div className='my-2'>
        <Form.Label htmlFor='email'>email:</Form.Label>
        <Form.Control type="email" name='email' onChange={setInput} required/>
        </div>
        </Form>
        <div className='my-2'>
        {children}
        </div>
    </div>
  )
}

export default SingUp
