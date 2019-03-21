import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
    render() {
        return (

            <div className="ui secondary pointing menu">
                <Link to="/" className="active item" >Stream</Link>


                <div className="right menu">
                    <Link to="/" className="item">All Streaming</Link>
                   <GoogleAuth />
                </div>



            </div>
        );
    }
}

export default Header;