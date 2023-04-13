import './YouthResult.scss';
import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

class YouthResult extends React.Component {
  state = {
    url: "/youth/" + this.props.youth.fireID
  }
  render() {
    return (
      <div className="youth-result">
          <div className='user-icon'>
            <FontAwesomeIcon icon={faCircleUser} size ="3x"></FontAwesomeIcon>
          </div>

          <div className='text-holder'>
            <p className="youth-name">{this.props.youth.firstName + " " + this.props.youth.lastName}</p>
            <p className='description'>Youth</p>
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

export default YouthResult;