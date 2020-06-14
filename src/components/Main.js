import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Nav from "./Nav";
import Header from "./Header";
import Analytics from "./Analytics";
import ScrollToTop from "./ScrollToTop";

class Main extends Component {
    fullPage = false;

    render() {
        return(
            <div>
                <Analytics/>
                <ScrollToTop/>
                <Helmet titleTemplate="%s | Sergio Mathurin" defaultTitle="Sergio Mathurin" />
                <div id="wrapper">
                    <Header/>
                    <div id="main">
                        {this.props.children}
                    </div>
                    {this.props.fullPage ? null : <Nav />}
                </div>
            </div>
        );
    }
}

export default Main;
