import React from "react";

export class Home extends React.Component {

    componentWillMount() {
        this.props.setPage("home");
    }

    changeTheme = (e) => {
        this.props.setTheme(e.target.value);
    }

    activeCursor = (theme) => {
        if(this.props.cursor === theme) {
            return (
                "btn-primary--active"
            )
        }
    }
    activeColor = (theme) => {
        if(this.props.color === theme) {
            return (
                "btn-secondary--active"
            )
        }
    }

    render() {
        return(
            <div className="home">
                <div className="home__text-box">
                    <div>
                    <h1 className="heading-primary">
                        <span className="highlight-primary">K</span>evin Cho,
                    </h1>
                    <h1 className="heading-primary">
                        Web <span className="highlight-secondary">D</span>eveloper.
                    </h1>
                    <p className="paragraph-primary">New Zealand citizen / Lives at Auckland CBD</p>
                
                    <p className="paragraph-secondary u-margin-top-small">
                        Graduated the University of Auckland
                    </p>
                    <p className="paragraph-secondary">
                        <span className="highlight-grey"> - Graduate Diploma in Computer Science</span>
                    </p>
                    <p className="paragraph-secondary">
                        <span className="highlight-grey"> - Masters in Chemistry</span>
                    </p>
                    </div>
                </div>
                
                <div className="home__button-box">
                    <div className="home__button-box--cursor">
                        <h3 className="heading-secondary u-margin-bottom-medium">Cursor Animation</h3>
                        <button 
                            className={`btn btn-primary u-margin-bottom-small ${this.activeCursor("particleSurge")}`} 
                            onClick={this.changeTheme}
                            value="particleSurge"
                        >Particle Surge</button>
                        <button 
                            className={`btn btn-primary u-margin-bottom-small ${this.activeCursor("crystallize")}`} 
                            onClick={this.changeTheme}
                            value="crystallize"
                        >Crystallize</button>
                        <button 
                            className={`btn btn-primary u-margin-bottom-small ${this.activeCursor("bubble")}`} 
                            onClick={this.changeTheme}
                            value="bubble"
                        >Bubble</button>
                    </div>

                    <div className="home__button-box--color">
                        <h3 className="heading-tertiary u-margin-bottom-medium u-margin-top-medium">Colour Theme</h3>
                        <div className="btn__grid">
                        <button 
                            className={`btn btn-secondary ${this.activeColor("#1ee2ff")}`}
                            onClick={() => this.props.setColor("#1ee2ff", "#ff3e3e")}
                        >Cool</button>
                        <button 
                            className={`btn btn-secondary ${this.activeColor("#3fffc5")}`}
                            onClick={() => this.props.setColor("#3fffc5", "#ff2080")}
                        >Pop</button>
                        <button 
                            className={`btn btn-secondary ${this.activeColor("#ffba35")}`}
                            onClick={() => this.props.setColor("#ffba35", "#676767")}
                        >Chic</button>
                        <button 
                            className={`btn btn-secondary ${this.activeColor("#89FF4C")}`}
                            onClick={() => this.props.setColor("#89FF4C", "#FF7E1B")}
                        >Fun</button>
                        <button 
                            className={`btn btn-secondary ${this.activeColor("#A90BFF")}`}
                            onClick={() => this.props.setColor("#A90BFF", "#F7FF0B")}
                        >Rich</button>
                        <button 
                            className={`btn btn-secondary ${this.activeColor("#49BFFF")}`}
                            onClick={() => this.props.setColor("#49BFFF", "#B5E5FF")}
                        >Calm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}