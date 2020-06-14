import React, { Component }from 'react';

class CategoryButton extends Component{
    render() {
        return(
            <button
                className={`skillbutton ${this.props.active[this.props.label] ? 'skillbutton-active' : ''}`}
                type="button"
                onClick={() => this.props.handleClick(this.props.label)}
            >
                {this.props.label}
            </button>
        );
    }
}

export default CategoryButton;
