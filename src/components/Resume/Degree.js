import React, { Component } from 'react';

class Degree extends Component {
    render() {
        return(
            <article className="degree-container">
                <header>
                    <h4 className="degree">{this.props.data.degree}</h4>
                    <p className="school"><a href={this.props.data.link}>{this.props.data.school}</a>, {this.props.data.year}</p>
                </header>
            </article>
        );
    }
}

export default Degree;
