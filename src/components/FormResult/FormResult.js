import './FormResult.scss';
import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import dateFormat from "dateformat";


class FormResult extends React.Component {
  state = {
    url: "/form/" + this.props.form._id
  }
  render() {
    return (
      <div className="form-result">
        <div className='form-icon'>
          <FontAwesomeIcon icon={faClipboard} size="3x" ></FontAwesomeIcon>
        </div>
          
          <div className='text-holder'>
            <p className="form-name">{this.props.form.name}</p>
            <p className='description'>{dateFormat(this.props.form.date,"longDate")}</p>
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

export default FormResult;