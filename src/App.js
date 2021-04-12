import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import MainPage from "./mainPage";
import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetails from "./BookDetails";
import ManageBooks from "./manageBooks";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/bookDetail/:id" component={BookDetails}></Route>
          <Route exact path="/manageBooks" component={ManageBooks}></Route>
        </Switch>
      </div>
    </Router>
  );
}