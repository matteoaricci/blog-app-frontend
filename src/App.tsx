import React, { useState, useEffect } from "react";
import { Box, Button, createStyles } from "@mantine/core";
import Blog, { BlogType } from "./components/Blog";
import BlogFeed from "./containers/BlogFeed";
import AddOrEditBlogModal from "./components/AddOrEditBlogModal";

function App() {
  const [editValues, setEditValues] = useState<BlogType>();
  const [addEditModalOpen, setAddEditModalOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <Box className={classes.feedWrapper}>
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
