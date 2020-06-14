import React, { Component } from "react";
import Main from "../components/Main";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";
import References from "../components/Resume/References";

import degrees from "../data/resume/degrees";
import positions from "../data/resume/positions";
import { skills, categories } from "../data/resume/skills";
import courses from "../data/resume/courses";

const sections = [
    'Education',
    'Experience',
    'Skills',
    'Courses',
    'References',
];

class ResumePage extends Component {
    render() {
        return(
            <Main>
                <Helmet title="Resume" />
                <article className="post" id="resume">
                    <header>
                        <div className="title">
                            <h2><Link to="resume">Resume</Link></h2>
                            <div className="link-container">
                                {sections.map((sec) => (
                                    <h4 key={sec}>
                                        <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                                    </h4>))}
                            </div>

                        </div>
                    </header>

                    <Education data={degrees} />
                    <Experience data={positions} />
                    <Skills skills={skills} categories={categories} />
                    <Courses data={courses} />
                    <References />

                </article>
            </Main>
        );
    }
}

export default ResumePage;
