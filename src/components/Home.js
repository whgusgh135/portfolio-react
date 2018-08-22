import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTheme = (e) => {
        this.props.setTheme(e.target.value);
    }

    render() {
        return(
            <div className="home">
                <div className="home__text-box">
                    <h1 className="heading-primary">
                        <span className="highlight-primary">K</span>evin Cho,
                    </h1>
                    <h1 className="heading-primary">
                        Web <span className="highlight-secondary">D</span>eveloper.
                    </h1>
                    <p className="paragraph-primary">New Zealand citizen / Lives at Auckland CBD</p>
                
                    <p className="paragraph-secondary u-margin-top-small">
                        Graduate Diploma in Computer Science
                        <span className="highlight-grey"> - University of Auckland</span>
                    </p>
                    <p className="paragraph-secondary">
                        Masters in Chemistry
                        <span className="highlight-grey"> - University of Auckland</span>
                    </p>
                </div>
                
                <div className="home__button-box">
                    <h3 className="heading-secondary u-margin-bottom-medium">Change Theme</h3>
                    <button 
                        className="btn btn-primary u-margin-bottom-small" 
                        onClick={this.changeTheme}
                        value="particleSurge"
                    >Particle Surge</button>
                    <button 
                        className="btn btn-primary"
                        onClick={this.changeTheme}
                        value="crystallize"
                    >Crystallize</button>

                    <h3 className="heading-tertiary u-margin-bottom-medium u-margin-top-big">Colour Theme</h3>
                    <button 
                        className="btn btn-secondary u-margin-bottom-small" 
                        onClick={() => this.props.setColor("#1ee2ff", "#ff3e3e")}
                    >Cool</button>
                    <button 
                        className="btn btn-secondary u-margin-bottom-small" 
                        onClick={() => this.props.setColor("#3fffc5", "#ff2080")}
                    >Pop</button>
                    <button 
                        className="btn btn-secondary u-margin-bottom-small" 
                        onClick={() => this.props.setColor("#ffba35", "#CECECE")}
                    >Rich</button>
                </div>
            </div>
        )
    } 
}