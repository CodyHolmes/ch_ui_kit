import React, { Component } from 'react';
import '../../assets/css/normalize.css';
import './Login.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <div className="login__row login__center">
                        <div className="login__text">
                            <h1 className="login__text__header">Welcome to CH UI Kit</h1>
                            <p className="login__text__subheader">
                                Lorem ipsum dolor amet cliche edison bulb paleo four dollar toast retro.
                                Umami cliche single-origin coffee photo booth freegan microdosing.
                                Snackwave offal coloring book, truffaut banh mi health goth tumeric.
                            </p>
                        </div>
                    </div>
                    <div className="login__row login__center">
                        <div className="login__box">
                            <div className="login-form">
                                <h3 className="login-form__header">PLEASE LOG IN</h3>
                                <br />
                                <form>
                                    <div className="login-form__item">
                                        <label className="login-form__label">Email</label>
                                        <span className="login-form__input-wrapper">
                                            <i className="fas fa-envelope"></i>
                                            <input className="login-form__input" type="text" placeholder="Email"></input>
                                        </span>
                                    </div>
                                    <div className="login-form__item">
                                        <label className="login-form__label">Password</label>
                                        <span className="login-form__input-wrapper">
                                            <i className="fas fa-lock"></i>
                                            <input className="login-form__input" type="password" placeholder="Password"></input>
                                        </span>
                                    </div>
                                    <div className="login-form__item login-form__item_forgot">
                                        <a className="login-form__forget" href='#'>Forget Password?</a>
                                    </div>
                                    <div className="login-form__actions">
                                        <button className="login-form__submit">Sign in</button>
                                        <span className="login-form__register"><a className="login-form__register__link" href="#">Register</a> if you dont have an account</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
