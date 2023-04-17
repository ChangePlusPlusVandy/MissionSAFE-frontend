import React, { useState } from "react";
import "./AttendEvent.scss";
import { attendEvent } from "../../util/ServerInterfaceEvents";
import { Navigate } from "react-router";
import HeaderResponsive from "../../components/Header/Header";
import { Button, TextInput, Text } from "@mantine/core";

const AttendEvent = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleUpdate = (event) => {
    event.preventDefault();
    if (event.target.name === "code") {
      setCode(event.target.value);
    }
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (code.length === 5 && email.length > 0) {
      try {
        let attendanceResult = await attendEvent(code, {
          email: email,
        });
        if (attendanceResult) {
          setRedirect(true);
        }
      } catch (err) {
        setErrorMessage("Failed to register attendance. Please try again.");
        document.getElementById("code-input").value = "";
      }
    }
  };

  if (redirect) return <Navigate to="/attend-success" />;

  return (
    <>
      <HeaderResponsive />
      <div className="page-container">
        <Text weight="700" size="xl" mb="xl">
          Event Attendance
        </Text>

        <div className="attendance-input">
          <TextInput
            label="Email"
            onChange={handleUpdate}
            name="email"
            type="text"
            placeholder="example@email.com"
            value={email}
            mb="sm"
          />
        </div>
        <div className="attendance-input">
          <TextInput
            label="Event Code"
            onChange={handleUpdate}
            name="code"
            type="text"
            placeholder="XXXXX"
            value={code}
          />
        </div>
        <p className="attendance-error">{errorMessage}</p>
        <Button onClick={handleSubmit} className="message-page-button">
          Mark Attendance
        </Button>
      </div>
    </>
  );
};

export default AttendEvent;
