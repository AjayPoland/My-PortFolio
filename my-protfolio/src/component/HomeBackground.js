import React from 'react'

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"

//external css file.
import "../css/HomeBackground.css"

function HomeBackground({children}) {
  return (
    <div className='main'>
      <div className='parent-div'>
        <div className='child-div'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default HomeBackground
