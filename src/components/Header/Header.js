import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createStyles,
  Header,
  Container,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/mission-safe-logo.png";

const HEADER_HEIGHT = "90px";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },

  dropdown: {
    position: "absolute",

    right: 0,
    zIndex: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    width: "200px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },

  link: {
    display: "block",
    lineHeight: 1,
    borderRadius: 0,
    padding: theme.spacing.md,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const HeaderResponsive = ({
  links = [
    { label: "Home", link: "/" },
    { label: "Search", link: "/records" },
    { label: "Attendance", link: "/attend-event" },
    { label: "Logout", link: "/logout" },
  ],
}) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <div></div>

        <div>
          <img src={logo} alt="" style={{ height: "80px" }} />
        </div>

        <div style={{ position: "relative" }}>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="md"
          />

          <Transition transition="pop-top-left" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  );
};

export default HeaderResponsive;
