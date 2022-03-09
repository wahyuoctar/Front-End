import { Box, Text } from "@chakra-ui/react"
import axios from 'axios'
import { useState, useEffect} from 'react'


const Comments = ({username, content}) => {


    return (
        <Box marginY = "1" paddingX="2">
            <Text display="inline" fontWeight="bold" marginRight="2">
                {username}</Text>
            <Text display="inline">
                {content}</Text>
        </Box>
    )
}

export default Comments