import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import profile from "./components/profile";
import edit from "./components/edit"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Book from './components/Book';

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path={"/"} exact component={Login} />
            <Route path={"/register"} exact component={Register} />
            <Route path={"/profile"} exact component={profile} />
            <Route path={"/edit"} exact component={edit} />
            <Route path={"/book"} exact component={Book} />
          </Switch>
        </Router>
      </div>
    </>
  )

  }