import React from 'react'
import {Box, Title, Text, createStyles} from "@mantine/core"

export type BlogType = {
    title?: string,
    body?: string,
    date: string
}

export default function Blog({title = "", body = "", date = ""}: BlogType) {
    const {classes} = useStyles();
    
  return (
    <Box className={classes.blogWrapper}>
        <Box className={classes.mainContentWrapper}>
            <Title order={3}>{title}</Title>
            <Text size="lg">{body}</Text>
        </Box>
        <Box className={classes.subContentWrapper}>
            <Text align="right" className={classes.dateText}>Posted {date}</Text>
        </Box>
    </Box>
  )
}

const useStyles = createStyles(() => ({
    blogWrapper: {
        maxWidth: '800px',
        width: "100%",
        padding: "1rem",
        backgroundColor: "black",
        borderRadius: "30px",
        marginBottom: "4rem"
    },
    mainContentWrapper: {
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "1rem"
    },
    subContentWrapper: {
        marginTop: "0.5rem",
        color: "white"
    },
    dateText: {
        fontStyle: "italic",
        paddingRight: "1rem"
    }
}))