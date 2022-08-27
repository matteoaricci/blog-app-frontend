import React, { useState } from "react";
import { Group, createStyles } from "@mantine/core";
import { Home, MessageDots, Settings } from "tabler-icons-react";

type Props = {};

const iconSize = 50;

type ActiveTypes = "home" | "messages" | "settings";

export default function LeftNav({}: Props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("");

  const handleIconClick = (type: ActiveTypes) => {
    setActive(type);
  };

  return (
    <>
      <Group className={classes.leftNavWrapper}>
      <div
          className={cx(classes.icon, {
            [classes.active]: active === "home",
          })}
          onClick={() => handleIconClick("home")}
        >
          <Home
            color={active === "home" ? "white" : "black"}
            size={iconSize}
          />
        </div>
        <div
          className={cx(classes.icon, {
            [classes.active]: active === "messages",
          })}
          onClick={() => handleIconClick("messages")}
        >
          <MessageDots
            color={active === "messages" ? "white" : "black"}
            size={iconSize}
          />
        </div>
        <div
          className={cx(classes.icon, {
            [classes.active]: active === "settings",
          })}
          onClick={() => handleIconClick("settings")}
        >
          <Settings
            color={active === "settings" ? "white" : "black"}
            size={iconSize}
          />
        </div>
      </Group>
    </>
  );
}

const useStyles = createStyles(() => ({
  leftNavWrapper: {
    width: "150px",
    position: "fixed",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    left: 0,
    paddingTop: "10%",
    backgroundColor: "white",
    zIndex: 10,
  },
  icon: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    border: "7px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  active: {
    backgroundColor: "black",
  },
}));
