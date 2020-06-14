import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class References extends Component {
    render() {
        return(
            <div className="references">
                <div className="link-to" id="references" />
                <div className="title">
                    <Link to="/contact">
                        <h3>References are available upon request</h3>
                    </Link>
                </div>
            </div>
        );
    }
}

export default References;
