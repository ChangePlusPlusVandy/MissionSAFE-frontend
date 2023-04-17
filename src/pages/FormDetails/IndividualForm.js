import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFormByID } from "../../util/ServerInterfaceForm";
import "./IndividualForm.scss";
import dateFormat from "dateformat";
import HeaderResponsive from "../../components/Header/Header";
import { Card, Avatar, Text, Badge, Group, Divider } from "@mantine/core";
import { IconForms } from "@tabler/icons-react";

const today_date = dateFormat(new Date(), "fullDate");

const IndividualForm = ({ param }) => {
  const [form, setForm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getFormByID(id).then((data) => {
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card withBorder padding="lg" radius="md" maw="350px">
          <Group position="apart">
            <Avatar color="red" radius="xl">
              <IconForms />
            </Avatar>
            <Badge color="red">
              {dateFormat(form.date, "paddedShortDate")}
            </Badge>
          </Group>

          <Text fz="lg" fw={500} mt="md">
            {form.name}
          </Text>
          <Text fz="sm" c="dimmed" mt={5}>
            {form.description}
          </Text>
          <Divider
            mt="sm"
            mb="xs"
            label={
              <>
                <Text weight="bold" size="md">
                  Programs
                </Text>
              </>
            }
            labelPosition="left"
          />
          <Text fz="sm" mt={5}>
            {form?.programs?.join(", ")}
          </Text>
          <Divider
            mt="sm"
            mb="xs"
            label={
              <>
                <Text weight="bold" size="md">
                  Associated Youth
                </Text>
              </>
            }
            labelPosition="left"
          />

          <Text fz="sm" mt={3}>
            <strong>Name</strong>: {form?.associated_youth?.firstName}{" "}
            {form?.associated_youth?.lastName}
          </Text>
          <Text fz="sm" mt={3}>
            <strong>Email</strong>: {form?.associated_youth?.email}
          </Text>
          <Divider
            mt="sm"
            mb="xs"
            label={
              <>
                <Text weight="bold" size="md">
                  Associated Events
                </Text>
              </>
            }
            labelPosition="left"
          />
          <Text fz="sm" mt={3}>
            <strong>Name</strong>: {form?.associated_event?.name}
          </Text>
          <Text fz="sm" mt={3}>
            <strong>Event description</strong>:{" "}
            {form?.associated_event?.description}
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default IndividualForm;
