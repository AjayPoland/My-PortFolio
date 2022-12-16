import React from 'react'

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
// import xxx from '../images/pexels-pixabay-270348.jpg'

// import image2 from "../images/pexels-miguel-á-padriñán-3785931.jpg"
import Login from './Login.js'
//external css file.
import "../css/HomeBackground.css"

// const styleDiv1={
//   backgroundImage: `url(${image2})`,
//   backgroundSize: "cover",
//   backgroundPosition: 'center',
//   height:"100vh",
//   maxWidth:"100vw",
//   position: 'relative',
//   color:"white",
//   margin:'0',
//   padding:'0',
// }
// const styleDiv2={
//   backgroundImage: `url(${xxx})`,
//   backgroundSize: "cover",
//   backgroundPosition:'center',
//   height:"100vh",
//   width:"100vw",
//   position: 'absolute',
//   color:"white",
//   margin:'0',
//   padding:'0',
//   opacity:'0.5',
//   display: "flex",
//   justifyContent: "center",
//   alignItems:"center"
// }
function HomeBackground() {
  return (
    <div className='main'>
      <div className='parent-div'>
        <div className='child-div'>
        <Login />
        </div>
      </div>
    </div>
  )
}

export default HomeBackground
