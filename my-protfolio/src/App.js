import './App.css';

//import Login from './component/Login'

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import Welcome from './component/Welcome';
import HomeBackground from './component/HomeBackground';



function App() {
  return (
    <div className='App'>
      <HomeBackground>
        <Welcome/>
      </HomeBackground>
    </div>
  );
}

export default App;
