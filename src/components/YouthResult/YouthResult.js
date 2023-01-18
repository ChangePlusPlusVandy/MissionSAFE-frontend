import './YouthResult.scss';
import React from "react";


class YouthResult extends React.Component {
    render() {
        return (
            <p>
              {this.props.youthResults.map(
                ({ firstName, lastName, active, programs }) => `Name ${firstName} ${lastName}, Active status ${active}, Enrolled Programs ${programs}`
              ).join(' ')}
            </p>
          );
    }
}

export default YouthResult;