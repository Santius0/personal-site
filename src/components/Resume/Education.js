import React, { Component } from 'react';

import Degree from "./Degree";

class Education extends Component {
    data = [];

    render() {
        return(
            <div className="education">
                <div className="link-to" id="education" />
                <div className="title">
                    <h3>Education</h3>
                </div>
                {this.props.data.map((degree) => (
                    <Degree
                        data={degree}
                        key={degree.school}
                    />
                ))}
            </div>
        );
    }
}

export default Education;
