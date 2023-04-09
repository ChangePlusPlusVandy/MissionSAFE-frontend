import React, { useState } from "react";
import './EventResult.scss';
import { useParams } from "react-router";
import React, { useState } from 'react';

/* let staff = '{ "staff" : [' +
'{ "firstName": "Alex" , "lastName":"Bawa" },' +
'{ "firstName":"Anjali" , "lastName":"Kota" },' +
'{ "firstName":"Ben" , "lastName":"Walton" },' +
'{ "firstName": "Eric" , "lastName":"Feng" },' +
'{ "firstName":"Ethan" , "lastName":"Jiang" },' +
'{ "firstName":"Hyun-Joon" , "lastName":"Lee" },' +
'{ "firstName": "Jhanavi" , "lastName":"Thakkar" },' +
'{ "firstName": "Neelasha" , "lastName":"Bhattacharjee" },' +
'{ "firstName":"Sam" , "lastName":"Shefnie" },' +
'{ "firstName":"Varun" , "lastName":"Sangal" }]}';

const allStaff = JSON.parse(staff);

const length = staff.employees.length;  */


const EventResults = () => {
  const {code} = useParams();
  const [currentEvent, fetchEvent] = useState(0);




  

  return (
    <div className="event_container">
      <div className="logo-header"></div>

      <div className="event-header">
        <div className="event-title"> Event Name </div>
      </div>

      <div className="result-background">
        <div className="result-attribute-title"> People</div>

        <div className="result-list"></div>

        <div className="result-attribute-title">Forms </div>

        <div className="result-list"></div>
      </div>
    </div>
  );
};

const EventStaff = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  function getFirstName() {
    // for (let i = 0; i < )
  }

  function getLastName() {}

  return (
    <div>
      <p>First Name: {first_name}</p>
      <p>Last Name: {last_name}</p>
    </div>
  );
};

export default EventResults;
