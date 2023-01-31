import './EventResult.scss';
import React from "react";

class EventResult extends React.Component {
  render() {
    return (
      <div className="event-result">
        <div className="event-result-left">
          <p className="event-title">{this.props.event.programs.join(", ")} event on {this.props.event.date}</p>
        </div>
        <div className="event-result-right">
          <p className="event-youth-count">{this.props.event.attended_youth.length} attendees</p>
          <p className="event-form-count">{this.props.event.attached_forms.length} forms</p>
        </div>
      </div>
    );
  }
}

export default EventResult;