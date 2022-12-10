import './ProgressionButton.scss';
import Forward from "./assets/arrow-forward.png"
import Backward from "./assets/arrow-back.png";
import React from "react";


class ProgressionButton extends React.Component {
    render() {
        if(this.props.direction === "forward") {
            return (
                <div onClick={this.props.handleClick} className={"button-container " + this.props.available}>
                    <div className="filler"/>
                    <p className="button-text">{this.props.text}</p>
                    <img alt="forward arrow" className="filler" src={Forward}/>
                </div>
            )
        } else {
            return (
                <div onClick={this.props.handleClick} className={"button-container backward " + this.props.available}>
                    <img alt="back arrow" className="filler" src={Backward}/>
                    <p className="button-text">{this.props.text}</p>
                    <div className="filler"/>
                </div>
            )
        }
    }
}

export default ProgressionButton;