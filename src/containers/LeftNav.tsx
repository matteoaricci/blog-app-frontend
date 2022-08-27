import React, { useState, useEffect } from "react";
import { Group, NavLink, createStyles } from "@mantine/core";
import { Home, MessageDots, Settings } from "tabler-icons-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

type Props = {};

const iconSize = 50;

type ActiveTypes = "/messages" | "/settings" | "/";

export default function LeftNav({}: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");
  const location = useLocation();

  const navLinks = [
    {
      pathname: "/",
      icon: Home,
      label: "Home",
      description: "Homepage",
    },
    {
      pathname: "/messages",
      icon: MessageDots,
      label: "Messages",
      description: "Read Messages",
    },
    {
      pathname: "/settings",
      icon: Settings,
      label: "Settings",
      description: "Configure Settings",
    },
  ];

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <>
      <Group className={classes.leftNavWrapper}>
        {navLinks.map((link) => (
          <NavLink
            className={cx(classes.link, {active: location.pathname === link.pathname}) }
            component={Link}
            icon={<link.icon size={40} />}
            to={link.pathname}
            label={link.label}
            description={link.description}
            active={location.pathname === link.pathname}
            variant="filled"
            color="indigo"
          />
        ))}
      </Group>
    </>
  );
}

const useStyles = createStyles(() => ({
  leftNavWrapper: {
    width: "175px",
    position: "fixed",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    left: 0,
    paddingTop: "170px",
    backgroundColor: "white",
    zIndex: 10,
    flexShrink: 0,
  },
  link: {
    borderRadius: "0 10px 10px 0"
  },
  active: {
    borderRadius: "10px"
  },
}));
