import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.scss';
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import StatsPage from "./pages/StatsPage";
import AboutPage from "./pages/AboutPage";

class App extends Component {
  render() {
    return(
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/resume" component={ResumePage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/stats" component={StatsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={NotFoundPage} status={404} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
