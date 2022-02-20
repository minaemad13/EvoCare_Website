import './style.css'
import Nav from './components/Navbar';
import Home from './components/Home';
import Map from './components/Map';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import NAvpublic from './components/NAvpublic';
// import Background from  './resources/background.jpg'

function App() {
  // const [user, setUser] = useState()
  // const [username, setUsername] = useState("Esraa");
  // const [password, setPassword] = useState("123");

  // const handleSubmit = async e => {
  //   const user = { username, password };
  //   // send the username and password to the server
  //   // const response = await axios.post(
  //   //   "",
  //   //   user
  //   // );
  //   // set the state of the user
  //   setUser("logged")
  //   // store the user in localStorage
  //   localStorage.setItem('user', 'logged')
  //   console.log('logged')
    
  // };
 
  return (
    <Router>
    <div className="App" style={{ 
      // backgroundImage: `url(${require('./resources/background.jpg')})` 
    }}>
    
      {/* <NAvpublic handleSubmit={handleSubmit}/> */}
      <Nav/>
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
