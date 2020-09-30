import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import NavBar from './components/views/NavBar/NavBar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from "./hoc/auth";



function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
        <div style = {{marginTop: '10vh', display: 'flex', justifyContent: "center", padding: '0 10vh'}}>
          <Route exact path = "/" component = {Auth(LandingPage, null)}/>
          <Route exact path = "/login" component = {Auth(LoginPage, false)}/>
          <Route exact path = "/register" component = {Auth(RegisterPage, false)}/>
        </div>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
