import React, { useEffect, useState } from "react";
import "./IndividualYouth.scss";
import { useParams } from "react-router";
import {
  getEventsByFireID,
  getFormsByFireID,
  getYouthByFireID,
} from "../../util/ServerInterfaceYouth";
import logo from "../../assets/mission-safe-logo.png";
import dateFormat from "dateformat";

// import {getFormByID} from "../../util/ServerInterfaceForm";

const BACKENDROUTE = "http://localhost:4000/api/users/youth";
const today_date = dateFormat(new Date(), "fullDate");

const IndividualYouth = () => {
  const { id } = useParams();
  const [currentYouth, setCurrentYouth] = useState([]);
  const [currentForms, setForms] = useState([]);
  const [currentEvents, setEvents] = useState([]);

  useEffect(() => {
    // redundancy .. could be necessary for readability wouldn't worry about it
    const curYouth = getYouthByFireID(id).then((data) => setCurrentYouth(data));
    const curForms = getFormsByFireID(id).then((data) => setForms(data));
    const curEvents = getEventsByFireID(id).then((data) => setEvents(data));
  }, []);

  // extract form date? from each form .. possibly more material later

  const renderedForms = currentForms.map((currentForm) => (
    <YouthForm
      name={currentForm.name}
      date={currentForm.date}
      description={currentForm.description}
      id={currentForm.id}
    />
  ));

  // extract event data? from each form .. possibly more material later

  const renderedEvents = currentEvents.map((currentEvent) => (
    <YouthEvent
      name={currentEvent.name}
      date={currentEvent.date}
      description={currentEvent.description}
      id={currentEvent.id}
    />
  ));

  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="bar-container">
        <h1 className="date">{today_date}</h1>
      </div>

      <div>
        <h2>
          Showing details for "{currentYouth.firstName} {currentYouth.lastName}"
        </h2>
      </div>

      <div className="result-header"> Forms </div>
      {renderedForms.length ? (
        renderedForms
      ) : (
        <div className="empty-result">
          {" "}
          No forms available for associated youth.{" "}
        </div>
      )}

      <div className="result-header"> Events </div>
      {renderedEvents.length ? (
        renderedEvents
      ) : (
        <div className="empty-result">
          {" "}
          No events available for associated youth.{" "}
        </div>
      )}
    </div>
  );
};

const YouthForm = ({ name, date, description }) => {
  return (
    <div className="forms-info">
      <h3>Form Name: <p>{name}</p> </h3>
      <h3>Date: <p>{dateFormat(date, "paddedShortDate")}</p></h3>
      <h3>Description: <p> {description} </p></h3>
    </div>
  );
};

const YouthEvent = ({ name, date, description }) => {
  return (
    <div className="events-info">
      <h3>Event Name: <p> {name} </p></h3>
      <h3>Date: <p> {dateFormat(date, "paddedShortDate")}</p> </h3>
      <h3>Description: <p>{description}</p></h3>
    </div>
  );
};

export default IndividualYouth;
