import React from 'react';
import Form from 'react-bootstrap/Form';

//styling bootsrtap css
import 'bootstrap/dist/css/bootstrap.min.css'

//external styling css
import '../../css/LoginMain.css'

function SingUp({handleSubmit,setInput,handleSignIn}) {
  return (
    <div>
      <Form className="sing-admin text-start" onSubmit={handleSubmit}>
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
        <div className="sing-admin-btn"
          >
            <button className="custom-singup-button btn" type="submit">
              sing up
            </button>
            <div></div>
            <button
              className="custom-singin-button btn fw-bold"
              onClick={()=>handleSignIn(true)}
            >
              sing in
            </button>
          <p className='mt-2'>Already have an account! <span className="badge text-bg-info" >Sing in</span></p>
          </div>
        </Form>
    </div>
  )
}

export default SingUp
