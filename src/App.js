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
      secondaryColor: "#ff3e3e"
    }
  }

  setTheme = (val) => {
    this.setState({theme: val});
  }

  setColor = (primaryColor, secondaryColor) => {
    document.documentElement.style.setProperty("--color-primary", primaryColor);
    document.documentElement.style.setProperty("--color-secondary", secondaryColor);
    this.setState({primaryColor});
    this.setState({secondaryColor});
  }

  render() {
    const { theme, primaryColor, secondaryColor, loading } = this.state;

    return (
      <BrowserRouter>
        <div className="main">
          <Nav />
          <Canvas 
            theme={theme}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route 
            exact path="/home" 
            render={() => <Home setTheme={this.setTheme} setColor={this.setColor}/>} 
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
