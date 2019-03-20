import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <div className="ui secondary pointing menu">
                <Link to="/" className="active item" >Stream</Link>


                <div className="right menu">
                    <Link to="/" className="item">All Streaming</Link>
                </div>
            </div>
        );
    }
}

export default Header;