import './App.css';

//import Login from './component/Login'

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './component/Welcome';
import HomeBackground from './component/HomeBackground';
import { MainLayoutOne } from './component/MainLayoutOne';
import LayoutTwo from './component/LayoutTwo';




function App() {
  return (
    <div className='App'>
      {/* <HomeBackground>
      <LayoutTwo/>
      <Welcome/> 
      </HomeBackground> */}
      {/* <MainLayoutOne/> */}
      <LayoutTwo/>
    </div>
  );
}

export default App;
