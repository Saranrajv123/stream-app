// cliend ID = 163378882158-7m6dtesgu7qvrqktpgkj5gn0hs73lei7.apps.googleusercontent.com
// https://apis.google.com/js/api.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

export class GoogleAuth extends Component {

    // state = {
    //     isSignedIn: null
    // }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '163378882158-7m6dtesgu7qvrqktpgkj5gn0hs73lei7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.authInstanceChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.authInstanceChange);
            });
        });
    }

    authInstanceChange = (issignedIn) => {
        if (issignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }

    }

    OnsignInHandler = () => {
        this.auth.signIn();
    }

    OnsignOutHandler = () => {
        this.auth.signOut();
    }

    renderingSignedButton = () => {
        if (this.props.GoogleAuthIsSignedIn === null) {
            return <div>I dont know if you're signed or not</div>
        } else if (this.props.GoogleAuthIsSignedIn) {
            return (
                <button onClick={this.OnsignOutHandler} className="ui red google button">
                    <i className='google-icon' />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.OnsignInHandler} className='ui blue google button'>
                    <i className="google-icon" />
                    Sign In
                </button>
            )
        }
    }
    render() {
        // console.log(this.state.isSignedIn)
        return (
            <div>
                {this.renderingSignedButton()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        GoogleAuthIsSignedIn: state.GoogleAuthReducer.isSignedIn
    };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
