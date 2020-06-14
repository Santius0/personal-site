import React, { Component } from 'react';
import dayjs from 'dayjs';
import url from 'url';

class Cell extends Component {
    render(){
        return(
            <div className="cell-container">
                <article className="mini-post">
                    <header>
                        <h3><a href={this.props.data.link}>{this.props.data.title}</a></h3>
                        <time className="published">{dayjs(this.props.data.date).format('MMMM, YYYY')}</time>
                    </header>
                    <a href={this.props.data.link} className="image">
                        {/*<img src={url.resolve('', this.props.data.image)} alt={this.props.data.title} />*/}
                        <img src={'https://www.essence.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-29-at-5.12.15-PM-1920x1080.png?width=1280&height=720'} />
                    </a>
                    <div className="description">
                        <p>{this.props.data.desc}</p>
                    </div>
                </article>
            </div>
        );
    }
}

export default Cell;
