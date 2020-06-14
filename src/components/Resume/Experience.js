import React, { Component } from "react";
import Job from "./Job";

class Experience extends Component {
    render() {
        return(
            <div className="experience">
                <div className="link-to" id="experience" />
                <div className="title">
                    <h3>Experience</h3>
                </div>
                {this.props.data.map((job) => (
                    <Job data={job} key={job.company}/>
                ))}
            </div>
        );
    }
}

export default Experience;
