import { Box, Image, Avatar, Text, Icon } from "@chakra-ui/react";
import { FaRegHeart, FaRegComment } from "react-icons/fa"
import Comments from "../Comments";
import axios from 'axios'
import { useState } from "react";

const ContentCard = ({avaPic ,username, caption, imageUrl, location, numberOfLikes, id}) => {
    const [comments, setComments] = useState ([])

    const fetchComments = () =>{
        axios.get('http://localhost:2500comments', {
            paras: {
                postId: id
            }
        }).then((res) =>{
            setComments(res.data)
        })
    }

    const renderComment = () =>{
        return comments.map((val) =>{
            return <Comments content={val.content} username={val.username}/>
        })
    }
    return (
        <Box borderWidth="1px" borderRadius="lg" maxW="md" paddingY="2" marginY="4">
            {/* Card Header */}
            <Box paddingX="4" paddingY="2" display="flex" alignItems="center">
                <Avatar src="" />
                <Box marginLeft="2">
                    <Text fontSize="md" fontWeight="bold">Username</Text>
                    <Text fontSize="sm" color="gray">Location</Text>
                </Box>
            </Box>
            {/* Card Media/Content */}
            <Image src="https://bit.ly/2Z4KKcF"/>
            {/* Action Button */}
            <Box paddingX="3" paddingY="2" display="flex">
                <Icon boxSize="6" as={FaRegHeart}></Icon>
                <Icon marginLeft={2} boxSize="6" as={FaRegComment}></Icon>
            </Box>
            {/* Like Count */}
            <Box paddingX="3">
                <Text fontWeight="bold">{(1251203).toLocaleString()} likes</Text>
            </Box>
            {/* Caption */}
            <Box paddingX="3">
                <Text display="inline" fontWeight="bold" marginRight="2">Username</Text>
                <Text display="inline">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae dolor iste veritatis sit corporis laborum accusantium nesciunt aspernatur. Facere, corrupti.    
                </Text>
            </Box>
            <Box paddingX="3" marginTop="4">
            {/* Comment Section */}
            <Text textDecoration="underline" fontWeight="bold">Comments</Text>
            <Comments/>
            </Box>
        </Box>
    )

}

export default ContentCard