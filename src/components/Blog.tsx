import React from 'react'
import {Box, Title, Text, createStyles} from "@mantine/core"

type Props = {
    title?: string,
    body?: string,
}

export default function Blog({title = "", body = ""}: Props) {
    const {classes} = useStyles();
    let today = new Date().toLocaleDateString()
  return (
    <Box className={classes.blogWrapper}>
        <Box className={classes.mainContentWrapper}>
            <Title order={3}>{title}</Title>
            <Text size="lg">{body}</Text>
        </Box>
        <Box className={classes.subContentWrapper}>
            <Text align="right" className={classes.dateText}>Posted {today}</Text>
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