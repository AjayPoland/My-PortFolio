import React from 'react';
import Card from 'react-bootstrap/Card'

//bootstrap styling css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Project.css'
//importing image
import project from '../images/project.jpg'

//import videos
// import song from '../videos/JAHILA SAMMA SONG.mp4'

import videodata from '../json/video.json'

function Project() {
    console.log(videodata);
  return (
    <div className="project-main">
      <div className='demo-pic'>
        <h2>Discription about projects:</h2>
        <Card>
        <Card.Img src={project}></Card.Img>
        </Card>
      </div>
      <div className='project-display'>
      {/* <iframe width="420" height="345" src="https://www.youtube.com/?tab=r1">
</iframe> */}
        {/* <video src={song} width="420" height="345" autoPlay controls/> */}
        {
            videodata.map(key=><div className='div-vdo border' key={key.id}><video src={key.src} width="420" height="345" autoPlay controls muted loop/> </div>)
        }
      </div>
    </div>
  )
}

export default Project
