import "./style.css";
import Home from "./components/Home";
import Footer from "./components/Footer1";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import profile from "./components/profile";
import edit from "./components/edit";
import Book from "./components/Book";
import protectionFilm from './components/protectionFilm';
import About from './components/About';
import dipping from './components/dipping';
import carCar from './components/carCare';
import nanoCeramic from './components/nanoCeramic';
import polish from './components/polish';
import windowFilm from './components/windowFilm';
import ScrollToTop from "./components/ScrollToTop";
import packages from './components/packages';
import ProtectedRouts from "./components/ProtectedRouts";
import { useState,useEffect } from "react";
import NAvpublic from "./components/NAvpublic";
import jwt from "jwt-decode"
import BookingCheckout from './components/payment-action';
import HomePage from './components/HomePage'

export default function App() {
 
  const [isAuthenticated,setIsAuthenticated]=useState(null)
    useEffect(() => {
      let token = localStorage.getItem('token')
          if(token){
              let tokenExpiration = jwt(token).exp;
              let dateNow = new Date();
  
              if(tokenExpiration < dateNow.getTime()/1000){
                  setIsAuthenticated(false)
              }else{
                  setIsAuthenticated(true)
              }
          } else {
             setIsAuthenticated(false)
          }
    
    },[])
  return (
    <>
      <div className="App">
        <Router>
          <ScrollToTop/>
          <NAvpublic isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/register"} exact component={Register} />
            <ProtectedRouts path={"/profile"} exact component={profile} />
            {/* <Route path={"/profile"} exact component={profile} /> */}
            <ProtectedRouts  path={"/edit"} exact component={edit} />
            <ProtectedRouts path={'/book'} exact component={Book} />
            <Route path={"/login"} exact render={
  (props) => <Login {...props} setIsAuthenticated={setIsAuthenticated}/>
} />
            <Route path={"/protectionfilm"} exact component={protectionFilm} />
            <Route path={"/about"} exact component={About} />
            <Route path={"/dipping"} exact component={dipping} />
            <Route path={"/car"} exact component={carCar} />
            <Route path={"/nano"} exact component={nanoCeramic} />
            <Route path={"/polish"} exact component={polish} />
            <Route path={"/windowfilm"} exact component={windowFilm} />
              <Route path={"/pay"} exact component={HomePage} />
          </Switch>
          <Footer isAuthenticated={isAuthenticated} />
        </Router>
      </div>
    </>
  );
}
