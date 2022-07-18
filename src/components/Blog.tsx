import React from "react";
import { Box, Title, Text, Button, createStyles } from "@mantine/core";

export type BlogType = {
  id: number;
  title: string;
  body: string;
  date: string;
};

type BlogProps = {
  blog: BlogType;
  handleEditClick: (blogId: number) => void;
};

export default function Blog({ blog, handleEditClick }: BlogProps) {
  const { classes } = useStyles();
  const { title, body, id, date } = blog;
  return (
    <Box className={classes.blogWrapper}>
      <Box className={classes.mainContentWrapper}>
        <Title order={3}>{title}</Title>
        <Text size="lg">{body}</Text>
      </Box>
      <Box className={classes.subContentWrapper}>
        <Text align="right" className={classes.dateText}>
          Posted {date}
        </Text>
        <Button onClick={() => handleEditClick(id)}>Edit</Button>
      </Box>
    </Box>
  );
}

const useStyles = createStyles(() => ({
  blogWrapper: {
    maxWidth: "800px",
    width: "100%",
    padding: "1rem",
    backgroundColor: "black",
    borderRadius: "30px",
    marginBottom: "4rem",
  },
  mainContentWrapper: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "1rem",
  },
  subContentWrapper: {
    marginTop: "0.5rem",
    color: "white",
  },
  dateText: {
    fontStyle: "italic",
    paddingRight: "1rem",
  },
}));
