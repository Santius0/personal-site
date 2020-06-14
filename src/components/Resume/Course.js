import React, { Component } from "react";

class Course extends Component {
    last = false;

    render() {
        return(
            <li className="course-container">
                <a href={this.props.data.link}>
                    <h4 className="course-number">{this.props.data.number}:</h4>
                    <p className="course-name">{this.props.data.title}</p>
                </a>
                {!this.props.last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
            </li>
        );
    }
}

export default Course;
