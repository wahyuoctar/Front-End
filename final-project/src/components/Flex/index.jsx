import {Box, Text, Avatar, Icon, Image, Spacer, Input, Button} from "@chakra-ui/react"
import nadiem from '../../assets/images/nadiem.png'
import axios from 'axios'
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"
import Comments from "../Comments"
import { API_URL } from "../../config/api"
import { useState } from "react"

const Flex = ({ avaPic, username, location, caption, likes, imageUrl, id}) => {
    const [comments, setComments] = useState([])
    const [inputComment, setInputComment] = useState("")
    const [displayInputComment, setDisplayInputComment] = useState(false)
    
    const fetchComments = () => {
        axios.get(`${API_URL}/comments`, {
            params: {
                postId: id
            }
        }).then((res) => {
            setComments(res.data)
        })
    }

    const renderComment = () => {
        return comments.map((val) =>{
            return <Comments content={val.content} username={val.username} />
        })
    }
    
    const handleCommentInput = (event) => {
        const { value } = event.target

        setInputComment(value)
    }
    
    const postNewComment = () => {
        const newData = {
            username: "Joko Widodo",
            content: inputComment,
            postId: id,
        }

        axios.post(`${API_URL}/comments`, newData).then(() => {
        fetchComments()
        setDisplayInputComment(false)
        })
    }
    
    
    // ---------------------------------------------------------------------------
    return (
        <>
        <Box borderWidth="1px" borderRadius="lg" maxW="md" paddingY="2" marginY="4">
        <Box paddingX="2" display="flex" alignItems="center">
            <Avatar src={avaPic}/>
            <Box marginLeft="2">
            <Text className="username" fontWeight="bold">{username}</Text>
            <Text color="gray">{location}</Text>
            </Box>
        </Box>
        <Box marginTop="2">
            <Image src={imageUrl} />
        </Box>
        <Box display="flex" marginX="2" marginY="2">
            <Icon boxSize="6" marginRight="4" as={FaRegHeart}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}>

            </Icon>
            <Icon boxSize="6" as={FaRegComment}
            onClick = {() => setDisplayInputComment(true)}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}>
    
            </Icon>
            <Spacer/>
            <Icon boxSize="6" as={BsThreeDotsVertical}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}></Icon>
        </Box> 

        {/* Likes, Caption, Comment Box */}
        <Box paddingX="3">
            <Text fontWeight="bold">{likes.toLocaleString()} likes</Text>
        </Box>
        <Box>

        <Box marginY = "2" paddingX = "3">
            <Text display="inline" fontWeight="bold" marginRight="2">
                {username}</Text>
            <Text display="inline">
                {caption}</Text>
        </Box>

        </Box>
        <Box marginY = "3" paddingX = "3">

            <Text fontWeight="bold" textDecoration={"underline"}>Comments</Text>
            <Text onClick={fetchComments}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}>View All Comments</Text>
            {renderComment()}
            
            {displayInputComment ? (
            <Box display="flex">
            <Input
              onChange={handleCommentInput}
              marginBottom="2"
              type="text"
              placeholder="Add a comment..."
              marginRight="4"
            />
            <Button onClick={postNewComment} colorScheme="green">
              Post
            </Button>
            </Box>
           ) : null}

        </Box>
        </Box>
        </>
    )
}

export default Flex