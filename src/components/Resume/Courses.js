import React, { Component } from 'react';
import Course from "./Course";

const getRows = (courses) => courses.sort((a, b) => {
    let ret = 0;
    if (a.university > b.university) ret = -1;
    else if (a.university < b.university) ret = 1;
    else if (a.number > b.number) ret = 1;
    else if (a.number < b.number) ret = -1;
    return ret;
}).map((course, idx) => (
    <Course
        data={course}
        key={course.title}
        last={idx === courses.length - 1}
    />
));

class Courses extends Component {
    data = []

    render() {
        return(
            <div className="courses">
                <div className="link-to" id="courses" />
                <div className="title">
                    <h3>Selected Courses</h3>
                </div>
                <ul className="course-list">
                    {getRows(this.props.data)}
                </ul>
            </div>
        );
    }
}

export default Courses;
