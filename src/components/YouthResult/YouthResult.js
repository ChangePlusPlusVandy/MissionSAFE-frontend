import "./YouthResult.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Text, Button, Stack, Group, Divider } from "@mantine/core";

class YouthResult extends React.Component {
  state = {
    url: "/youth/" + this.props.youth.fireID,
  };
  render() {
    return (
      <>
        <Group align="center" position="apart" h="80px">
          <Group>
            <Avatar color="red" radius="xl">
              {this.props.youth.firstName.charAt(0) +
                this.props.youth.lastName.charAt(0)}
            </Avatar>
            <Stack spacing={0}>
              <Text>
                {this.props.youth.firstName + " " + this.props.youth.lastName}
              </Text>
              <Text size="sm" color="gray">
                {this.props.youth.email}
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

export default YouthResult;
