import "./FormResult.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Text, Button, Stack, Group, Divider } from "@mantine/core";
import { IconForms } from "@tabler/icons-react";
import dateFormat from "dateformat";

class FormResult extends React.Component {
  state = {
    url: "/form/" + this.props.form._id,
  };
  render() {
    return (
      <>
        <Group align="center" position="apart" h="80px">
          <Group>
            <Avatar color="red" radius="xl">
              <IconForms size="1.5rem" />
            </Avatar>

            <Stack spacing={0}>
              <Text>{this.props.form.name}</Text>
              <Text size="sm" color="gray">
                {"For " + dateFormat(this.props.form.date, "longDate")}
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

export default FormResult;
