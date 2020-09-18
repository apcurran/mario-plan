import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
