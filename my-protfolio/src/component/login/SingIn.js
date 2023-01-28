import React,{useContext} from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

//image
import myPic from '../../images/mypic.jpg'

//styling bootsrtap css
import 'bootstrap/dist/css/bootstrap.min.css'

//external styling css
import '../../css/LoginMain.css'
 
//context importing
import { userContext } from '../MainLayoutOne';

function SingIn({setInput,handleSubmit,children}) {
  const frmClose=useContext(userContext);
  return (
    <>
    <button className='frm-close text-dark p-0 m-0' onClick={()=>frmClose.frmClose(false)}>close</button>
    <Card className='singin-card border-0 align-items-start'>
    <Card.Img src={myPic} className=' singin-logo rounded-circle'/>
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
        </Form>
        <div>
        {children}
        </div>

    </>
  )
}

export default SingIn
