import React from "react";
import { Link } from "react-router-dom";
import svg from "../styles/img/sprite.svg";

export class Nav extends React.Component {

    isActive(item) {
        if(this.props.page === item) {
            return (
                "nav__icon--active"
            )
        } else {
            return
        }
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav__section">
                    <Link to="/home" className="nav__link u-margin-top-none">
                        <p className="nav__text highlight-primary u-margin-top-medium">Kevin</p>
                    </Link> 
                </div>
                <div className="nav__section">
                    <Link to="/home" className="nav__link">
                        <p className="nav__item">Home</p>
                        <svg className={`nav__icon ${this.isActive("home")}`}>
                            <use xlinkHref={`${svg}#icon-home-outline`}></use>
                        </svg>
                    </Link>
                    <Link to="/about" className="nav__link">
                        <p className="nav__item">About</p>
                        <svg className={`nav__icon ${this.isActive("about")}`}>
                            <use xlinkHref={`${svg}#icon-pencil`}></use>
                        </svg>
                    </Link>
                    <Link to="/work" className="nav__link">
                        <p className="nav__item">My Work</p>
                        <svg className={`nav__icon ${this.isActive("work")}`}>
                            <use xlinkHref={`${svg}#icon-folder`}></use>
                        </svg>
                    </Link>
                    <Link to="/contact" className="nav__link">
                        <p className="nav__item">Contact</p>
                        <svg className={`nav__icon ${this.isActive("contact")}`}>
                            <use xlinkHref={`${svg}#icon-mail`}></use>
                        </svg>
                    </Link>
                </div>
                <div className="nav__section">
                    <a href="https://github.com/whgusgh135" target="_blank" rel="noopener noreferrer" className="nav__link">
                        <p className="nav__item">Github</p>
                        <svg className="nav__icon nav__icon--small">
                            <use xlinkHref={`${svg}#icon-github`}></use>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/hyunho.cho.566" target="_blank" rel="noopener noreferrer" className="nav__link">
                        <p className="nav__item">Facebook</p>
                        <svg className="nav__icon nav__icon--small">
                            <use xlinkHref={`${svg}#icon-facebook2`}></use>
                        </svg>
                    </a>
                </div>
            </nav>
        )
    }
}