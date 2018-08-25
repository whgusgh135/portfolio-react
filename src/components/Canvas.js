import React from "react";
import { ParticleSurge } from "./canvas/ParticleSurge";
import { Crystallize } from "./canvas/Crystallize";
import { Bubble } from "./canvas/Bubble";

export class Canvas extends React.Component {
    
    renderCanvas() {
        if(this.props.theme === "particleSurge") {
            return (
                <ParticleSurge 
                    primaryColor={this.props.primaryColor} 
                    secondaryColor={this.props.secondaryColor}
                />
            )
        } else if(this.props.theme === "crystallize") {
            return (
                <Crystallize 
                    primaryColor={this.props.primaryColor} 
                    secondaryColor={this.props.secondaryColor}
                />
            )
        } else if(this.props.theme === "bubble") {
            return (
                <Bubble 
                    primaryColor={this.props.primaryColor} 
                    secondaryColor={this.props.secondaryColor}
                />
            )
        }
    }

    render() {
        if(this.props.loading) {
            return (
                <div className="canvas__loading">
                    Loading..............
                </div>
            )
        } else {
            return (
                <div>
                    {this.renderCanvas()}   
                </div>
            )
        }
    } 
}