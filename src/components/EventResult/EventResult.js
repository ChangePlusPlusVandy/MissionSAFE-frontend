import './EventResult.scss';
import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import dateFormat from "dateformat";
class EventResult extends React.Component {
  state = {
    url: "/event/" + this.props.event._id
  }
  render() {
    return (
      <div className="event-result">
        <div className='event-icon'>
          <FontAwesomeIcon icon={faCalendarDays} size="3x" ></FontAwesomeIcon>
        </div>
          <div className='text-holder'>
            <p className="event-name">{this.props.event.name}</p>
            <p className='description'>{dateFormat(this.props.event.date,"longDate")}</p>
          </div>
          <div className='button-holder'>
          <Link to = {this.state.url} target = "_blank">
            <button className="det-button">
              Details
            </button>
          </Link>
          </div>
      </div>
    );
  }
}

export default EventResult;