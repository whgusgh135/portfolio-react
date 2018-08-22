import React from "react";
import { ParticleSurge } from "./canvas/ParticleSurge";
import { Crystallize } from "./canvas/Crystallize";

export class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props);
    }

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
        }
    }

    render() {
        return (
            <div>
                {this.renderCanvas()}
            </div>
        )
    } 
}