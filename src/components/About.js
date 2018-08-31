import React from "react";
import { Link } from "react-router-dom";

export class About extends React.Component {

    componentWillMount() {
        this.props.setPage("about");
    }

    render() {
        return (
            <div className="about">
                <div className="about__text-box">
                    <div>
                        <h3 className="heading-primary"><span className="highlight-primary">About me</span></h3>
                        
                        <p className="paragraph-secondary u-margin-top-small">2 years ago, I was a chemist.</p>
                        <p className="paragraph-secondary">But my interest in coding inspired me to</p>
                        <p className="paragraph-secondary">get a Computer Science degree</p>
                        <p className="paragraph-secondary">and learn web developemnet!</p>
    
                        <p className="paragraph-secondary u-margin-top-small">I mainly code in Javascript.</p>
                        <p className="paragraph-secondary">I am most comfortable developing a full stack app</p>
                        <p className="paragraph-secondary">using React-Redux, Node, Express, and MongoDB.</p>
    
                        <p className="paragraph-secondary u-margin-top-small">I am also familiar with other languages.</p>
                        <p className="paragraph-secondary">I love discovering new technology stack!</p>
    
                        <Link to="/work" className="btn btn-secondary u-margin-top-small u-margin-bottom-small">Find out more</Link>
                    </div>
                </div>
    
                <div className="about__feature-box">
                    <div className="feature-box__container feature-box__container--1 feature-box__container--secondary">
                        <h4 className="feature-box__heading feature-box__heading--secondary">
                            Front-end
                        </h4>
                        <ul className="feature-box__list-box">
                            <li className="feature-box__list">
                                Language - HTML, Javascript, ES6, Typescript, CSS, SASS
                            </li>
                            <li className="feature-box__list">
                                Library - ReactJS, Redux, AngularJS, jQuery, Bootstrap, Axios(AJAX request)
                            </li>
                        </ul>
                    </div>
                    <div className="feature-box__container feature-box__container--2">
                        <h4 className="feature-box__heading">
                            Back-end
                        </h4>
                        <ul className="feature-box__list-box">
                            <li className="feature-box__list">
                                NodeJS, ExpressJS, RESTful APIs, MongoDB, mongoose
                            </li>
                        </ul>
                    </div>
                    <div className="feature-box__container feature-box__container--3">
                        <h4 className="feature-box__heading">
                            Others
                        </h4>
                        <ul className="feature-box__list-box">
                            <li className="feature-box__list">
                                Version Control Systems - Git, Github
                            </li>
                            <li className="feature-box__list">
                                Cloud - Cloud9(AWS), Firebase, Heroku
                            </li>
                            <li className="feature-box__list">
                                Other Languages - Java, Python
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}