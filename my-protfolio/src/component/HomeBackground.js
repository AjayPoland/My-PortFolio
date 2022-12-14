import React from 'react'

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import image1 from "../images/wp2377416.jpg";
import xxx from '../images/pexels-pixabay-270348.jpg'

import image2 from "../images/pexels-miguel-á-padriñán-3785931.jpg"

const styleDiv1={
  backgroundImage: `url(${image2})`,
  backgroundSize: "cover",
  backgroundPosition: 'center',
  height:"100vh",
  maxWidth:"100vw",
  position: 'relative',
  color:"white",
  margin:'0',
  padding:'0',
  opacity:'',
  zIndex:'2'
}
const styleDiv2={
  backgroundImage: `url(${xxx})`,
  backgroundSize: "cover",
  backgroundPosition:'center',
  height:"100vh",
  width:"100vw",
  position: 'absolute',
  color:"white",
  margin:'0',
  padding:'0',
  zIndex:'1',
  opacity:'0.5'
}
function HomeBackground() {
  return (
    <div style={styleDiv1}>
      <div style={styleDiv2}></div>
    </div>
  )
}

export default HomeBackground
