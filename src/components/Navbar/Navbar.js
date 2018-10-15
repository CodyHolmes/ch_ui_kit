import React, { Component } from 'react';
import './Navbar.css';
import '../../assets/css/normalize.css';

class Navbar extends Component {
    componentDidMount(){
        const win = document.querySelector('html');
        const navbar = document.querySelector('.navbar');

        const fixedHeader = () => {
            const scrollPosition = win.scrollTop;
            // console.log
            console.log(scrollPosition);
            if (scrollPosition > 0){
                navbar.classList.add('navbar--active');
            } else {
                navbar.classList.remove('navbar--active');
            }
        }

        fixedHeader();

        window.onscroll = () => {
            fixedHeader();
        }

        document.querySelector('.navbar__mobile-button').addEventListener('click', () => {
            document.querySelector('.mobile-navbar').classList.toggle('mobile-navbar--active');
        });


        document.querySelector('.mobile-navbar__close').addEventListener('click', () => {
            document.querySelector('.mobile-navbar').classList.toggle('mobile-navbar--active');
        });
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="navbar__content">
                        <div className="navbar__title">
                            Logo
                        </div>
                        <div className="navbar__right">
                                <ul className="navbar__links">
                                    <li><a href="#test">test 1</a></li>
                                    <li><a href="#test">test 1</a></li>
                                    <li><a href="#test">test 1</a></li>
                                </ul>
                                <div className="navbar__mobile">
                                    <button className="navbar__mobile-button">
                                        <span><i className="fas fa-bars"></i></span>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-navbar">
                    <button className="mobile-navbar__close">
                        <span><i className="fas fa-times" aria-hidden="true"></i></span>
                    </button>
                    <div className="mobile-navbar__content">
                        <ul className="mobile-navbar__links">
                            <li className="menu_item"><a href="#about">About</a></li>
                            <li className="menu_item"><a href="#portfolio">Portfolio</a></li>
                            <li className="menu_item"><a href="#skills">Skills</a></li>
                            <li className="menu_item"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="remove-before-use-2k-px-div"></div>
            </div>
        );
    }
}

export default Navbar;
