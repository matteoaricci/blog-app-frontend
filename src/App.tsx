import React from "react";
import { Box, createStyles } from "@mantine/core";
import BlogFeed from "./containers/BlogFeed";
import LeftNav from "./containers/LeftNav"

function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.feedWrapper}>
      <LeftNav />
      <BlogFeed />
    </Box>
  );
}

const useStyles = createStyles(() => ({
  feedWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default App;
