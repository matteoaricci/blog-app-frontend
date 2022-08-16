import React from "react";
import { Drawer, Group, createStyles } from "@mantine/core";

type Props = {};

export default function LeftNav({}: Props) {
  const { classes } = useStyles();
  return (
    <>
      <Group className={classes.leftNavWrapper}>
        {["M", "S"].map((item) => (
          <div className={classes.leftNavItem}>{item}</div>
        ))}
      </Group>
    </>
  );
}

const useStyles = createStyles(() => ({
  leftNavWrapper: {
    width: "100px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    left: 0,
  },
  leftNavItem: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
}));
