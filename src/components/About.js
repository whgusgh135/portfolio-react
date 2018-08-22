import React from "react";

export const About = () => {
    return (
        <div className="about">
            <div className="about__text-box">
                <h3 className="heading-primary"><span className="highlight-primary">About me</span></h3>
                
                <p className="paragraph-secondary u-margin-top-small">2 years ago, I was a chemist.</p>
                <p className="paragraph-secondary">But my interest in coding inspired me to</p>
                <p className="paragraph-secondary">get a Computer Science degree</p>
                <p className="paragraph-secondary">and self-teach web developemnet!</p>

                <p className="paragraph-secondary u-margin-top-small">I mainly code in Javascript.</p>
                <p className="paragraph-secondary">And I am comfortable developing a full stack app</p>
                <p className="paragraph-secondary">using React-Redux, Node, Express, and MongoDB.</p>

                <p className="paragraph-secondary u-margin-top-small">I also have broad knowledge in other languages.</p>
                <p className="paragraph-secondary">Check out all my skils!</p>

                <button className="btn btn-primary u-margin-top-small">Find out more</button>
            </div>

            <div className="about__feature-box">
                <div className="feature-box__container">
                    <h4 className="feature-box__heading">
                        Front-end
                    </h4>
                    <ul className="feature-box__list-box">
                        <li className="feature-box__list">
                            Language - HTML, Javascript, ES6, Typescript, CSS, SASS
                        </li>
                        <li className="feature-box__list">
                            Library - jQuery, ReactJS, Redux, AngularJs, Bootstrap
                        </li>
                    </ul>
                </div>
                <div className="feature-box__container">
                    <h4 className="feature-box__heading">
                        Back-end
                    </h4>
                    <ul className="feature-box__list-box">
                        <li className="feature-box__list">
                            Language - NodeJS, ExpressJS, AJAX, RESTful APIs
                        </li>
                        <li className="feature-box__list">
                            Database - NoSQL(MongoDB)
                        </li>
                    </ul>
                </div>
                <div className="feature-box__container">
                    <h4 className="feature-box__heading">
                        Others
                    </h4>
                    <ul className="feature-box__list-box">
                        <li className="feature-box__list">
                            Version Control Systems - Git, Github
                        </li>
                        <li className="feature-box__list">
                            Cloud - AWS, Firebase, Heroku
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