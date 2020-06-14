import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from "../components/Main";

import markdown from '../data/about.md';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const getText = async (file) => {
    let t = ''
    await fetch(markdown)
        .then(res => res.text())
        .then(text => {
            t = text
        })
    return t;
}

const getCount = (text) => {
    return text.split(/\s+/).map((s) => s.replace(/\W/g, '')).filter((s) => s.length).length
}

class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            text: '',
        }
    }

    async componentDidMount() {
        let text = await getText(markdown);
        let count = getCount(text);
        this.setState({
            count: count,
            text: text
        })
    }

    render() {
        console.log(this.state)
        return(
            <Main>
                <Helmet title="About" />
                <article className="post" id="about">
                    <header>
                        <div className="title">
                            <h2><Link to="/about">About Me</Link></h2>
                            <p>(in about {this.state.count} words)</p>
                        </div>
                    </header>
                    <ReactMarkdown source={this.state.text} renderers={{Link: LinkRenderer,}}  escapeHtml={false}/>
                </article>
            </Main>
        );
    }
}

export default AboutPage;
