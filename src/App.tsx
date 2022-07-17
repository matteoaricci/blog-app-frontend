import React, { useState, useEffect } from 'react';
import {Box, createStyles} from "@mantine/core"
import Blog, {BlogType} from "./components/Blog"

function App() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const {classes} = useStyles();
  useEffect(() => {
    setBlogs(dummyBlogs)
  }, [])
  
  return (
    <Box className={classes.feedWrapper}>
      {blogs.map(blog => (
        <Blog title={blog.title} body={blog.body} date={blog.date}/>
      ))}
    </Box>
  );
}

const useStyles = createStyles(() => ({
  feedWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}))

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let today = new Date().toLocaleDateString()

const dummyBlogs = [
  {title: "Title Goes Here", body:lorem, date: today},
  {title: "Title Goes Here", body:lorem, date: today},
  {title: "Title Goes Here", body:lorem, date: today},
  {title: "Title Goes Here", body:lorem, date: today},

]

export default App;
