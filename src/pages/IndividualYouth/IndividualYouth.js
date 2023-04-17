import React, { useEffect, useState } from "react";
import "./IndividualYouth.scss";
import { useParams } from "react-router";
import {
  getEventsByFireID,
  getFormsByFireID,
  getYouthByFireID,
} from "../../util/ServerInterfaceYouth";
import dateFormat from "dateformat";
import HeaderResponsive from "../../components/Header/Header";
import { Card, Avatar, Text, Badge, Group, Stack } from "@mantine/core";
import { IconCalendarEvent, IconForms } from "@tabler/icons-react";

const today_date = dateFormat(new Date(), "fullDate");

const IndividualYouth = () => {
  const { id } = useParams();
  const [currentYouth, setCurrentYouth] = useState([]);
  const [currentForms, setForms] = useState([]);
  const [currentEvents, setEvents] = useState([]);

  useEffect(() => {
    getYouthByFireID(id).then((data) => setCurrentYouth(data[0]));
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack align="center" maw="350px" mb="xl">
          <div>
            <h2>
              Showing details for "{currentYouth.firstName}{" "}
              {currentYouth.lastName}"
            </h2>
          </div>

          <Text size="xl" weight="bold">
            Forms
          </Text>
          {renderedForms.length ? (
            renderedForms
          ) : (
            <div className="empty-result">
              No forms available for associated youth.
            </div>
          )}

          <Text size="xl" weight="bold">
            Events
          </Text>
          {renderedEvents.length ? (
            renderedEvents
          ) : (
            <div className="empty-result">
              No events available for associated youth.
            </div>
          )}
        </Stack>
      </div>
    </div>
  );
};

const YouthForm = ({ name, date, description }) => {
  return (
    <Card withBorder padding="lg" radius="md">
      <Group position="apart">
        <Avatar color="orange" radius="xl">
          <IconForms />
        </Avatar>
        <Badge color="orange">{dateFormat(date, "paddedShortDate")}</Badge>
      </Group>

      <Text fz="lg" fw={500} mt="md">
        {name}
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        {description}
      </Text>
    </Card>
  );
};

const YouthEvent = ({ name, date, description }) => {
  return (
    <Card withBorder padding="lg" radius="md">
      <Group position="apart">
        <Avatar color="cyan" radius="xl">
          <IconCalendarEvent />
        </Avatar>
        <Badge color="cyan">{dateFormat(date, "paddedShortDate")}</Badge>
      </Group>

      <Text fz="lg" fw={500} mt="md">
        {name}
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        {description}
      </Text>
    </Card>
  );
};

export default IndividualYouth;
