import React from "react";
import { Box, createStyles } from "@mantine/core";
import BlogFeed from "./containers/BlogFeed";
import LeftNav from "./containers/LeftNav";
import NewUser from "./containers/NewUser";
import { Routes, Route, useLocation } from "react-router-dom";
import Settings from "./containers/Settings";

function App() {
  const { classes } = useStyles();
  const location= useLocation();

  return (
    <Box className={classes.feedWrapper}>
      <LeftNav />
      <Routes location={location}>
        <Route path="/" element={<BlogFeed />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
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
