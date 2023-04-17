import "./EventResult.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Text, Button, Stack, Group, Divider } from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react";
import dateFormat from "dateformat";

class EventResult extends React.Component {
  state = {
    url: "/event/" + this.props.event._id,
  };
  render() {
    return (
      <>
        <Group align="center" position="apart" h="80px" miw="350px">
          <Group>
            <Avatar color="red" radius="xl">
              <IconCalendarEvent size="1.5rem" />
            </Avatar>
            <Stack spacing={0}>
              <Text>{this.props.event.name}</Text>
              <Text size="sm" color="gray">
                {dateFormat(this.props.event.date, "longDate")}
              </Text>
            </Stack>
          </Group>

          <Link to={this.state.url} target="_blank">
            <Button variant="light">Details</Button>
          </Link>
        </Group>
        <Divider size="xs" variant="dashed" />
      </>
    );
  }
}

export default EventResult;
