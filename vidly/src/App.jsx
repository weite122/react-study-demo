import React, { Component } from "react";
import {Route, Redirect, Switch} from 'react-router-dom'
import Movies from "./components/movies";
import NotFound from "./components/NotFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/navbar";
import movieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={movieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers}/>
            <Route path="/rentals" component={Rentals}/>
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;