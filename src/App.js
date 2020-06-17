import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import './App.scss';
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import StatsPage from "./pages/StatsPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => 
        props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => 
        props.theme.mode === 'dark' ? '#EEE' : '#111'};
    body, input, select, textarea: => ${props => 
        props.theme.mode === 'dark' ? '#111' : '#EEE'};
}
`;

class App extends Component {
    render() {
        // const [theme, setTheme] = useState({mode: 'dark'});
        return(
            <ThemeProvider theme={{mode: 'light'}}>
                <>
                    <GlobalStyle/>
                    <BrowserRouter>
                        <Switch>
                          <Route exact path="/" component={ResumePage} />
                          {/*<Route exact path="/" component={BlogPage} />*/}
                          {/*<Route exact path="/" component={IndexPage} />*/}
                          <Route path="/resume" component={ResumePage} />
                          {/*<Route path="/projects" component={ProjectsPage} />*/}
                          {/*<Route path="/about" component={AboutPage} />*/}
                          <Route path="/stats" component={StatsPage} />
                          <Route path="/contact" component={ContactPage} />
                          <Route component={NotFoundPage} status={404} />
                        </Switch>
                    </BrowserRouter>
                </>
            </ThemeProvider>
    );
  }
}

export default App;
