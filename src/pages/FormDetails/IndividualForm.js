import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormByID } from "../../util/ServerInterfaceForm";
import "./IndividualForm.scss";
import logo from "../../assets/mission-safe-logo.png";
import dateFormat from "dateformat";
import HeaderResponsive from "../../components/Header/Header";

const today_date = dateFormat(new Date(), "fullDate");

const IndividualForm = ({ param }) => {
  const [form, setForm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    // call the api with the id to get the data
    // and then set the data using setForm
    const tempForm = getFormByID(id).then((data) => {
      setForm(data);
    });
  }, []);

  return (
    <div>
      <HeaderResponsive />

      <div className="bar-container">
        <h1 className="date">{today_date}</h1>
      </div>

      <div>
        <h2>Showing details for "{form.name}"</h2>
      </div>

      <div className="info">
        <p>
          {" "}
          <strong>Form Name:</strong> {form.name}{" "}
        </p>
        <p>
          {" "}
          <strong>Description:</strong> {form?.description}{" "}
        </p>
        <p>
          {" "}
          <strong>Date:</strong> {dateFormat(form.date, "paddedShortDate")}
        </p>
        <p>
          {" "}
          <strong>Programs:</strong> {form?.programs?.join(", ")}
        </p>
        <p>
          {" "}
          <strong>Associated Youth:</strong>
        </p>
        <div className="indent">
          <p>
            Name: {form?.associated_youth?.firstName}{" "}
            {form?.associated_youth?.lastName}
          </p>
          <p>email: {form?.associated_youth?.email} </p>
        </div>
        <p>
          {" "}
          <strong>Associated Event:</strong>{" "}
        </p>
        <div className="indent">
          <p>Name: {form?.associated_event?.name} </p>
          <p>Event description: {form?.associated_event?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualForm;
