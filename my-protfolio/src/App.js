import './App.css';


//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"

import { MainLayoutOne } from './component/MainLayoutOne';
import ProfilePic from './component/ProfilePic'

// function disableScrollA(e){
//     document.body.style.overflow='hidden'
// }

// function anbaleScrollA(e){
//   document.body.style.overflow='auto';
// }

function App() {
  return (
    <div className='App'>
      {/* <button onClick={anbaleScrollA}>anbaleScrollA  style={{height:'50em',backgroundColor:'yellowgreen'}}</button>
      <button onClick={disableScrollA}>disableScrollA</button> */}
      <MainLayoutOne/>
      {/* <ProfilePic/> */}
    </div>
  );
}

export default App;
