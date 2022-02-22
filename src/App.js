import "./style.css";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer1";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import profile from "./components/profile";
import edit from "./components/edit";
import Book from "./components/Book";

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/register"} exact component={Register} />
            <Route path={"/profile"} exact component={profile} />
            <Route path={"/edit"} exact component={edit} />
            <Route path={"/book"} exact component={Book} />
            <Route path={"/login"} exact component={Login} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}