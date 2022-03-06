import { Box, Text, Button, Center } from '@chakra-ui/react'
import axios from 'axios'
import { useState} from 'react'
import { API_URL } from '../../config/api'
import Flex from '../../components/Flex'



const HomePage = () => {
    const [contentList, setContentList] = useState([])

    const fetchContentList = () => {
        axios.get(`${API_URL}/posts`).then((res) =>{
            setContentList(res.data)
        })
    }

    const renderContentList = () => {
        return contentList.map((val) =>{
    return (
        <Flex
        username = {val.username}
        avaPic = {val.avaPic}
        caption = {val.caption}
        likes = {val.likes}
        location = {val.location}
        imageUrl = {val.imageUrl}
        id = {val.id}
        />
    )})
    }

    return (
    <Center>
    <Box paddingY = "8">
    <Button marginBottom="4" onClick={fetchContentList}>View Content</Button>
    {renderContentList()}
    </Box>
    </Center>
    )
}

export default HomePage