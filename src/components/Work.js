import React from "react";

import KIndieBlog1 from "../styles/img/K-Indie-blog-1.png";
import Stylofy1 from "../styles/img/Stylofy-1.png";
import Portfolio1 from "../styles/img/Portfolio-1.png";

import Code from "../styles/img/game-code.png";
import Hack from "../styles/img/game-hack.png";
import Memory from "../styles/img/game-memory.png";
import Office from "../styles/img/game-office.png";
import Shooting from "../styles/img/game-shooting.png";
import Snake from "../styles/img/game-snake.png";
import Snitch from "../styles/img/game-snitch.png";
import Space from "../styles/img/game-space.png";
import Squares from "../styles/img/game-squares.png";

export const Work = () => {
    return (
        <div className="work">
            <h3 className="heading-primary u-margin-top-medium">
                <span className="highlight-primary">My Works</span>
            </h3>
            <p className="paragraph-primary">
                All my codes can be seen on my github page, <a className="link-primary" href="https://github.com/whgusgh135" target="_blank">github.com/whgusgh135</a>
            </p>
            
        
            <h4 className="paragraph-secondary u-margin-top-small u-margin-bottom-tiny">
                Full Stack Web Application
            </h4>
           
            <div className="work-box">
                <div className="work-box__big-item-grid">
                    <div className="work-box__big-item">
                        <a href="https://k-indie-blog.herokuapp.com/" target="_blank">
                            <img src={KIndieBlog1} className="work-box__picture" />
                            <h6 className="work-box__description--heading">K-Indie Blog</h6>
                            <p className="work-box__description--paragraph">ejs, CSS, Node, Express, RESTful APIs, MongoDb</p>
                        </a>
                        <div className="work-box__description-box">
                            <h6>K-Indie Blog</h6>
                            <p>My first full stack application using ejs as frontend and Node, Express, and MongoDb as backend</p>
                        </div>
                    </div>
                    <div className="work-box__big-item">
                        <a href="https://stylofy.herokuapp.com/" target="_blank">
                            <img src={Stylofy1} className="work-box__picture" />
                            <h6 className="work-box__description--heading">Stylofy</h6>
                            <p className="work-box__description--paragraph">ReactJS, Redux, SASS, Node, Express, RESTful APIs, MongoDb</p>
                        </a>
                        <div className="work-box__description-box">
                            <h6>Stylofy</h6>
                            <p>My first full stack application using ejs as frontend and Node, Express, and MongoDb as backend</p>
                        </div>
                    </div>
                    <div className="work-box__big-item">
                        <a href="https://k-indie-blog.herokuapp.com/" target="_blank">
                            <img src={Portfolio1} className="work-box__picture" />
                            <h6 className="work-box__description--heading">Portfolio</h6>
                            <p className="work-box__description--paragraph">ReactJS, SASS, Javascript canvas</p>
                        </a>
                        <div className="work-box__description-box">
                            <h6>Portfolio</h6>
                            <p>My first full stack application using ejs as frontend and Node, Express, and MongoDb as backend</p>
                        </div>
                    </div>
                </div>  
            </div>

            <h4 className="paragraph-secondary u-margin-top-small">
                Mini Games
            </h4>
            <p className="paragraph-primary">
                Fun little projects to create mini web games to practice writing more efficient ES6 code.
            </p>
            <p className="paragraph-primary">
                All the codes can be found on, <a className="link-primary" href="https://github.com/whgusgh135/mini-game-projects" target="_blank">github.com/whgusgh135/mini-game-projects</a>
            </p>

            <div className="work-box u-margin-top-tiny">
                <div className="work-box__small-item-grid">
                    <a href="https://crack-the-code-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Code} className="work-box__picture" />
                    </a>
                    <a href="https://hacking-phone-password-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Hack} className="work-box__picture" />
                    </a>
                    <a href="https://flip-and-match-card-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Memory} className="work-box__picture" />
                    </a>
                    <a href="https://the-office-quotes-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Office} className="work-box__picture" />
                    </a>
                    <a href="https://shooting-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Shooting} className="work-box__picture" />
                    </a>
                    <a href="https://simple-snake-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Snake} className="work-box__picture" />
                    </a>
                    <a href="https://avoid-stars-in-space-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Snitch} className="work-box__picture" />
                    </a>
                    <a href="https://golden-snitch-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Space} className="work-box__picture" />
                    </a>
                    <a href="https://9-square-puzzle-game.netlify.com/" target="_blank" className="work-box__small-item">
                        <img src={Squares} className="work-box__picture" />
                    </a>
                </div>
            </div>
        </div>
    )
}