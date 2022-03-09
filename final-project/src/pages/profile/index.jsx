import { Box, Button, Text, Avatar, Spacer, Center} from '@chakra-ui/react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Profile = () => {
    const [memberProfile, setMemberProfile] = useState({})
    const fetchProfile = () => {
        axios.get(`http://localhost:2100/users/1`).then((res) =>{
            setMemberProfile(res.data)
        }).catch((err) =>{
            console.log(err);
            alert('Terjadi kesalahan!')
        })
    }

    useEffect(() =>{
        fetchProfile()
    },[])

    return (
    <>
    <Center>
    <Box borderWidth="1px" borderRadius="lg" maxW="md" paddingY="2" marginY="4">
        {/* Box for Head */}
        <Box paddingX="2" display="flex" alignItems="center">
            <Avatar src={memberProfile.avaPic}/>

        {/* Box for posts */}
        <Box marginLeft="50">
            <Text textAlign={"center"} fontWeight="bold">{memberProfile.posts}</Text>
            <Text color="gray">Posts</Text>
        </Box>

        {/* Box for followers */}
        <Box marginLeft="50">
            <Text textAlign={"center"} fontWeight="bold">{memberProfile.followers}</Text>
            <Text color="gray">Followers</Text>
        </Box>

        {/* Box for following */}
        <Box marginLeft="50">
            <Text textAlign={"center"} fontWeight="bold">{memberProfile.following}</Text>
            <Text color="gray">Following</Text>
        </Box>
        </Box>

        {/* Box for fullname & biography */}
        <Box width={"xs"} paddingX="2">
            <Text fontWeight="bold">{memberProfile.fullname}</Text>
            <Text>{memberProfile.biography}</Text>
        </Box>

        {/* Box for Image */}
        <Box marginTop="2">
            {/* <Image /> */}
        </Box>
    </Box>
    </Center>
    </>    
    )
}

export default Profile