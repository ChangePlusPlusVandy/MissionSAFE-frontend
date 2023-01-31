import './EventResult.scss';
import React from "react";

class EventResult extends React.Component {
    render() {
        return (
            <p>
              {this.props.eventResults.map(
                ({ date, programs, staff }) => `Date: ${date}, Staff ${staff}, Associated Programs ${programs}`
              ).join(' ')}
            </p>
          );
    }
}

export default EventResult;