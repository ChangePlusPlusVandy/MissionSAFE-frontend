import './FormResult.scss';
import React from "react";

class FormResult extends React.Component {
  render() {
    return (
      <div className="form-result">
        <div className="form-result-left">
          <p className="form-title">Form filed {this.props.form.date}</p>
          <p className="form-programs">Regarding {this.props.form.programs.join(", ")}</p>
        </div>
      </div>
    );
  }
}

export default FormResult;