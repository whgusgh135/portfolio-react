import React from "react";

import KIndieBlog1 from "../styles/img/K-Indie-blog-1.png";
import Stylofy1 from "../styles/img/Stylofy-1.png";
import Portfolio1 from "../styles/img/Portfolio-1.png";
import Roomie1 from "../styles/img/Roomie-1.png";

import Code from "../styles/img/game-code.png";
import Hack from "../styles/img/game-hack.png";
import Memory from "../styles/img/game-memory.png";
import Office from "../styles/img/game-office.png";
import Shooting from "../styles/img/game-shooting.png";
import Snake from "../styles/img/game-snake.png";
import Snitch from "../styles/img/game-snitch.png";
import Space from "../styles/img/game-space.png";
import Squares from "../styles/img/game-squares.png";

export class Work extends React.Component {

    componentWillMount() {
        this.props.setPage("work");
    }

    render() {
        return (
            <div className="work">
                <div className="work__heading">
                    <h3 className="heading-primary">
                        <span className="highlight-primary">My Works</span>
                    </h3>
                    <p className="paragraph-primary">
                        All my codes can be seen on my github page, <a className="link-primary" href="https://github.com/whgusgh135" target="_blank" rel="noopener noreferrer">github.com/whgusgh135</a>
                    </p>
                </div>
            
                <div className="work-box__heading--1">
                    <h4 className="paragraph-secondary u-margin-top-medium u-margin-bottom-tiny">
                        Full Stack Web Application
                    </h4>
                </div>
                
               
                <div className="work-box">
                    <div className="work-box__big-item-grid">
                        <div className="work-box__big-item">
                            <a href="https://k-indie-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={KIndieBlog1} alt="K-Indie-blog" className="work-box__picture" />
                                <h6 className="work-box__description--heading">K-Indie Blog</h6>
                                <p className="work-box__description--paragraph">ejs, CSS, Node, Express, RESTful APIs, MongoDb</p>
                            </a>
                            <div className="work-box__description-box--right">
                                <h6 className="work-box__description-box-heading">K-Indie Blog</h6>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">My first full stack app for introducing Korean indie music.</p>
                                <p className="work-box__description-box-paragraph">Tech used:</p>
                                <p className="work-box__description-box-paragraph">- ejs, CSS, Node, Express, MongoDb</p>
                                <p className="work-box__description-box-paragraph">- mvc architectural pattern</p>
                                <p className="work-box__description-box-paragraph">- RESTful APIs for CRUD operations</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">- secure auth implementation using bcrypt and session cookies.</p>
                                <p className="work-box__description-box-paragraph">Website features:</p>
                                <p className="work-box__description-box-paragraph">- users can post songs and comment on posts.</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-small">- admin can delete any posts or comments.</p>
                                <a href="https://github.com/whgusgh135/music_blog" target="_blank" rel="noopener noreferrer" className="btn btn-work-box">View Codes</a>
                            </div>
                        </div>
                        <div className="work-box__big-item">
                            <a href="https://stylofy.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Stylofy1} alt="Stylofy" className="work-box__picture" />
                                <h6 className="work-box__description--heading">Stylofy</h6>
                                <p className="work-box__description--paragraph">ReactJS, Redux, SASS, Node, Express, RESTful APIs, MongoDb</p>
                            </a>
                            <div className="work-box__description-box--right">
                                <h6 className="work-box__description-box-heading">Stylofy</h6>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">Developed a simple reservation app for an imaginery barbershop to study react-redux structure.</p>
                                <p className="work-box__description-box-paragraph">Tech used:</p>
                                <p className="work-box__description-box-paragraph">- ReactJS, Redux, SASS, Node, Express, MongoDb</p>
                                <p className="work-box__description-box-paragraph">- mvc architectural pattern</p>
                                <p className="work-box__description-box-paragraph">- RESTful APIs for CRUD operations</p>
                                <p className="work-box__description-box-paragraph">- async API calls/ async redux using thunk</p>
                                <p className="work-box__description-box-paragraph">- redux to control states.</p>
                                <p className="work-box__description-box-paragraph">- secure auth using bcrypt and jsonwebtoken.</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">- SASS 7-1 Pattern, BEM methodology</p>
                                <p className="work-box__description-box-paragraph">Website features:</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-small">- users can make a booking and check their bookings</p>
                                <a href="https://github.com/whgusgh135/stylofy-react" target="_blank" rel="noopener noreferrer" className="btn btn-work-box">View Codes</a>
                            </div>
                        </div>
                        <div className="work-box__big-item">
                            <a href="https://kevin-cho.herokuapp.com/home" target="_blank" rel="noopener noreferrer">
                                <img src={Portfolio1} alt="Porfolio" className="work-box__picture" />
                                <h6 className="work-box__description--heading">Portfolio</h6>
                                <p className="work-box__description--paragraph">ReactJS, SASS, Javascript canvas</p>
                            </a>
                            <div className="work-box__description-box--right">
                            <h6 className="work-box__description-box-heading">Portfolio</h6>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">A single page application for my portfolio.</p>
                                <p className="work-box__description-box-paragraph">Tech used:</p>
                                <p className="work-box__description-box-paragraph">Tech used:</p>
                                <p className="work-box__description-box-paragraph">- ReactJS, Redux, SASS, Node, Express, MongoDb</p>
                                <p className="work-box__description-box-paragraph">- mvc architectural pattern</p>
                                <p className="work-box__description-box-paragraph">- RESTful APIs for CRUD operations</p>
                                <p className="work-box__description-box-paragraph">- async API calls/ async redux using thunk</p>
                                <p className="work-box__description-box-paragraph">- redux to control states.</p>
                                <p className="work-box__description-box-paragraph">- secure auth using bcrypt and jsonwebtoken.</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">- SASS 7-1 Pattern, BEM methodology</p>
                                <p className="work-box__description-box-paragraph">Website features:</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-small">- users can make a booking and check their bookings</p>
                                <a href="https://github.com/whgusgh135/portfolio-react" target="_blank" rel="noopener noreferrer" className="btn btn-work-box">View Codes</a>
                            </div>
                        </div>
                        <div className="work-box__big-item">
                            <a href="https://roomie-react.herokuapp.com/home" target="_blank" rel="noopener noreferrer">
                                <img src={Roomie1} alt="Roomie" className="work-box__picture" />
                                <h6 className="work-box__description--heading">Roomie</h6>
                                <p className="work-box__description--paragraph">ReactJS, Redux, SASS, Node, Express, RESTful APIs, MongoDb</p>
                            </a>
                            <div className="work-box__description-box--left">
                            <h6 className="work-box__description-box-heading">Roomie</h6>
                                <p className="work-box__description-box-paragraph u-margin-bottom-tiny">Web application to find roommates and flats</p>
                                <p className="work-box__description-box-paragraph">Tech used:</p>
                                <p className="work-box__description-box-paragraph">- React, SASS, Javascript canvas</p>
                                <p className="work-box__description-box-paragraph">- Javascript canvas to make background animations</p>
                                <p className="work-box__description-box-paragraph">- Simple API to send email</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-small">- SASS 7-1 Pattern, BEM methodology</p>
                                <p className="work-box__description-box-paragraph">Website features:</p>
                                <p className="work-box__description-box-paragraph">- Users can find roommates or flats by category with search function.</p>
                                <p className="work-box__description-box-paragraph u-margin-bottom-small">- users can message each other.</p>
                                <a href="https://github.com/whgusgh135/roomie-frontend-react" target="_blank" rel="noopener noreferrer" className="btn btn-work-box">View Codes</a>
                            </div>
                        </div>
                    </div>  
                </div>
    
                <div className="work-box__heading--2">
                    <h4 className="paragraph-secondary u-margin-top-medium">
                        Mini Games
                    </h4>
                    <p className="paragraph-primary">
                        Fun little projects to create mini web games to practice writing more efficient ES6 code.
                    </p>
                    <p className="paragraph-primary">
                        All the codes can be found on, <a className="link-primary" href="https://github.com/whgusgh135/mini-game-projects" target="_blank" rel="noopener noreferrer">github.com/whgusgh135/mini-game-projects</a>
                    </p>
                </div>
               
                <div className="work-box u-margin-top-tiny">
                    <div className="work-box__small-item-grid">
                        <a href="https://crack-the-code-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Code} alt="game-1" className="work-box__picture--small" />
                        </a>
                        <a href="https://hacking-phone-password-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Hack} alt="game-2" className="work-box__picture--small" />
                        </a>
                        <a href="https://flip-and-match-card-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Memory} alt="game-3" className="work-box__picture--small" />
                        </a>
                        <a href="https://the-office-quotes-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Office} alt="game-4" className="work-box__picture--small" />
                        </a>
                        <a href="https://shooting-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Shooting} alt="game-5" className="work-box__picture--small" />
                        </a>
                        <a href="https://simple-snake-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Snake} alt="game-6" className="work-box__picture--small" />
                        </a>
                        <a href="https://golden-snitch-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Snitch} alt="game-7" className="work-box__picture--small" />
                        </a>
                        <a href="https://avoid-stars-in-space-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Space} alt="game-8" className="work-box__picture--small" />
                        </a>
                        <a href="https://9-square-puzzle-game.netlify.com/" target="_blank" rel="noopener noreferrer" className="work-box__small-item">
                            <img src={Squares} alt="game-9" className="work-box__picture--small" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}