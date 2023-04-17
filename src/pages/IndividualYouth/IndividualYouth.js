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
import HeaderResponsive from "../../components/Header/Header";

const today_date = dateFormat(new Date(), "fullDate");

const IndividualYouth = () => {
  const { id } = useParams();
  const [currentYouth, setCurrentYouth] = useState([]);
  const [currentForms, setForms] = useState([]);
  const [currentEvents, setEvents] = useState([]);

  useEffect(() => {
    getYouthByFireID(id).then((data) => setCurrentYouth(data));
    getFormsByFireID(id).then((data) => setForms(data));
    getEventsByFireID(id).then((data) => setEvents(data));
  }, [id]);

  const renderedForms = currentForms.map((currentForm) => (
    <YouthForm
      name={currentForm.name}
      date={currentForm.date}
      description={currentForm.description}
      id={currentForm.id}
    />
  ));

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
      <HeaderResponsive />

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
      <h3>
        Form Name: <p>{name}</p>{" "}
      </h3>
      <h3>
        Date: <p>{dateFormat(date, "paddedShortDate")}</p>
      </h3>
      <h3>
        Description: <p> {description} </p>
      </h3>
    </div>
  );
};

const YouthEvent = ({ name, date, description }) => {
  return (
    <div className="events-info">
      <h3>
        Event Name: <p> {name} </p>
      </h3>
      <h3>
        Date: <p> {dateFormat(date, "paddedShortDate")}</p>{" "}
      </h3>
      <h3>
        Description: <p>{description}</p>
      </h3>
    </div>
  );
};

export default IndividualYouth;
