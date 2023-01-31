import './FormResult.scss';
import React from "react";

class FormResult extends React.Component {
    render() {
        return (
            <p>
              {this.props.formResults.map(
                ({ date, programs }) => `Date: ${date}, Associated Programs: ${programs}`
              ).join(' ')}
            </p>
          );
    }
}

export default FormResult;