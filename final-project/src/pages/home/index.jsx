import { Box, Text, Button, Center, Spinner, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { API_URL } from '../../config/api'
import MainContent from '../../components/MainContent'
import Navbar from '../../components/Navbar'



const HomePage = () => {
    const [contentList, setContentList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    const fetchContentList = () => {
        setIsLoading(true)
        setTimeout(() => {
        axios.get(`${API_URL}/posts`).then((res) =>{
            setContentList(res.data)
        }).catch((err) =>{
            toast({
                title: "Can't Reach The Server",
                description: "Connect The Server",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            })
            .finally(() => {
              setIsLoading(false);
            });
    }, 1000)
    }

    const renderContentList = () => {
        return contentList.map((val) =>{
    return (
        <MainContent
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

    // ComponentDidMount
    useEffect(() => {
        fetchContentList()
    }, [])

    return (
    <Center>
    {isLoading ? 
    <Spinner></Spinner>:
    <Box paddingY = "2">
    {renderContentList()}
    </Box>
    }
    </Center>
    )
}

export default HomePage