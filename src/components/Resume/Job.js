import React, { Component } from 'react';

class Job extends Component {
    render() {
        return(
            <article className="jobs-container">
                <header>
                    <h4><a href={this.props.data.link}>{this.props.data.company}</a> - {this.props.position}</h4>
                    <p className="daterange"> {this.props.data.daterange}</p>
                </header>
                <ul className="points">
                    {this.props.data.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </article>
        );
    }
}

export default Job;
