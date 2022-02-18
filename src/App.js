import './style.css'
import Nav from './components/Navbar';
import Home from './components/Home';
import Map from './components/Map';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
// import Background from  './resources/background.jpg'

function App() {
 
  return (
    <Router>
    <div className="App" style={{ 
      // backgroundImage: `url(${require('./resources/background.jpg')})` 
    }}>
      <Nav/>
      {/* <Map/> */}
      <div className='content'>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
    

      </div>
      <Footer/>
    </div>
    </Router>
  );
 
}

export default App;
