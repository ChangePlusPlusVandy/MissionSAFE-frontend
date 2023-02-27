import './YouthResult.scss';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class YouthResult extends React.Component {
  render() {
    return (
      <div className="youth-result">
        <div className="youth-result-left">
          <div className='user-icon'>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>

          <div>
            <p className="youth-name">{this.props.youth.firstName} {this.props.youth.lastName}</p>
          </div>

          {/* <p className="youth-email">{this.props.youth.email}</p>
          <p className="youth-programs">{this.props.youth.programs.join(", ")}</p>
        </div>
        <div className="youth-result-right">
          <p className="youth-active">{this.props.youth.active ? "Active" : "Inactive"}</p> */}

          {/* put page link in the quotation */}
          <a href=''>
            <button class="det-button">
              Details
            </button>
          </a>

        </div>

        <div className='category-youth'>
          Youth
        </div>
      </div>
    );
  }
}

export default YouthResult;