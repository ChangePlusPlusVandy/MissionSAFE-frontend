import './NavButton.scss';
import React from 'react';
import { Link } from 'react-router-dom';

class NavButton extends React.Component {
    render() {
        return (
            <Link to={this.props.link}>
                <div className={"button-container " + this.props.available}>
                    <p className='button-text'>{this.props.text}</p>
                </div>
            </Link>
        )
    }
}

export default NavButton;