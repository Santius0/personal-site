import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from "../components/Main";
import Cell from "../components/Cell";

import projects from "../data/projects";

class ProjectsPage extends Component {
    render() {
        return(
            <Main>
                <Helmet title={"Projects"}/>
                <article className="post" id="projects">
                    <header>
                        <div className="title">
                            <h2><Link to="/projects">Projects</Link></h2>
                            <p>A selection of projects that I&apos;m not too ashamed of</p>
                        </div>
                    </header>
                    {projects.map((project) => (
                        <Cell data={project} key={project.title}/>
                    ))}
                </article>
            </Main>
        );
    }
}

export default ProjectsPage;
