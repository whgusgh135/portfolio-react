import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Canvas } from "./components/Canvas";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: "particleSurge",
      primaryColor: "#1ee2ff",
      secondaryColor: "#ff3e3e",
      loading: false,
      currentPage: "home"
    }
  }
  componentWillMount() {
    const primaryColors = ["#1ee2ff", "#3fffc5", "#ffba35", "#89FF4C", "#A90BFF", "#49BFFF"];
    const secondaryColors = ["#ff3e3e", "#ff2080", "#676767", "#FF7E1B", "#F7FF0B", "#B5E5FF"];
    const randomNum = Math.floor(Math.random() * 6);
    this.setState({primaryColor: primaryColors[randomNum]});
    this.setState({secondaryColor: secondaryColors[randomNum]});
    document.documentElement.style.setProperty("--color-primary", primaryColors[randomNum]);
    document.documentElement.style.setProperty("--color-secondary", secondaryColors[randomNum]);
  }

  setTheme = (val) => {
    this.setState({theme: val});
  }

  setColor = (primaryColor, secondaryColor) => {
    document.documentElement.style.setProperty("--color-primary", primaryColor);
    document.documentElement.style.setProperty("--color-secondary", secondaryColor);
    this.setState({primaryColor});
    this.setState({secondaryColor});
    this.setState({loading: true});
    setTimeout(() => {
        this.setState({loading: false});
    }, 1)
  }

  setPage = (page) => {
    this.setState({currentPage: page})
  }

  render() {
    const { theme, primaryColor, secondaryColor, loading } = this.state;

    return (
      <BrowserRouter>
        <div className="main">
          <Nav page={this.state.currentPage} />
          <Canvas 
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            loading={loading}
          />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route 
            exact path="/home" 
            render={() => <Home setTheme={this.setTheme} setColor={this.setColor} setPage={this.setPage} cursor={this.state.theme} color={this.state.primaryColor} />} 
          />
          <Route 
            exact path="/about" 
            render={() => <About setPage={this.setPage} />} 
          />
          <Route 
            exact path="/work" 
            render={() => <Work setPage={this.setPage} />} 
          />
          <Route 
            exact path="/contact" 
            render={() => <Contact setPage={this.setPage} />} 
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
