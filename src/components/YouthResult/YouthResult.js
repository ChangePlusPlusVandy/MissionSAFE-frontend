import './YouthResult.scss';
import React from "react";

class YouthResult extends React.Component {
  render() {
    return (
      <div className="youth-result">
        <div className="youth-result-left">
          <p className="youth-name">{this.props.youth.firstName} {this.props.youth.lastName}</p>
          <p className="youth-email">{this.props.youth.email}</p>
          <p className="youth-programs">{this.props.youth.programs.join(", ")}</p>
        </div>
        <div className="youth-result-right">
          <p className="youth-active">{this.props.youth.active ? "Active" : "Inactive"}</p>
        </div>
      </div>
    );
  }
}

export default YouthResult;