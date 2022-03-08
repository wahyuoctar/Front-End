import { Box, Button, Text, Avatar, Spacer} from '@chakra-ui/react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = ({avaPic, username, location}) => {
    return (
    <>
    <Box borderWidth="1px" borderRadius="lg" maxW="md" paddingY="2" marginY="4">
        {/* Box for Head */}
        <Box paddingX="2" display="flex" alignItems="center">
            <Avatar/>
        <Box marginLeft="2">
            <Text className="username" fontWeight="bold">username</Text>
            <Text color="gray">location</Text>
        </Box>
        </Box>

        {/* Box for Image */}
        <Box marginTop="2">
            {/* <Image /> */}
        </Box>
    </Box>
    </>    
    )
}

export default Profile