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
    const [commentsExpand, setCommentsExpand] = useState(false)
    
    const fetchComments = () => {
        axios.get(`${API_URL}/comments`, {
            params: {
                _expand: "user",
                postId: id
            }
        }).then((res) => {
            setComments(res.data)
        })
    }

    const renderComment = () => {
        return comments.map((val) =>{
            return <Comments content={val.content} username={val.user.username} userId={val.user.userId} />
        })
    }
    
    const handleCommentInput = (event) => {
        const { value } = event.target

        setInputComment(value)
    }
    
    const postNewComment = () => {
        const newData = {
            userId: 1,
            content: inputComment,
            postId: id,
        }

        axios.post(`${API_URL}/comments`, newData).then(() => {
        fetchComments()
        setDisplayInputComment(false)
        })
    }
    

    // const clickToLike = (mount) => {
    //     const addLike = {likes: likes + 1}
    //         axios.patch(`${API_URL}/posts`, addLike)

    //         const dataToFind = toDoItem.find((val) =>{
    //             return val.id === id
    //           })
          
    //           // axios.get(`http://localhost:2000/todos/${id}`).then((res) =>{
    //           //   const newIsDoneValue = !res.data.isDone
                
    //             axios.patch(`http://localhost:2000/todos/${id}`, { isDone: !dataToFind.isDone}).then(() =>{
    //               fetchTodoList()
    //             })
    // }
    
    
    // ---------------------------------------------------------------------------
    return (
        <>
        <Box borderWidth="1px" borderRadius="lg" maxW="md" paddingY="2" marginY="4">
        
        {/* Box for Head */}
        <Box paddingX="2" display="flex" alignItems="center">
            <Avatar src={avaPic}/>
            <Box marginLeft="2">
            <Text className="username" fontWeight="bold">{username}</Text>
            <Text color="gray">{location}</Text>
            </Box>
        </Box>

        {/* Box for Image */}
        <Box marginTop="2">
            <Image src={imageUrl} />
        </Box>

        {/* Box for Likes and Icons */}
        <Box display="flex" marginX="2" marginY="2">
            
            {/* Likes */}
            <Text paddingX="1" fontWeight="bold">{likes.toLocaleString()} likes</Text>
            
            <Spacer/>

            {/* Icon Like */}
            <Icon boxSize="6" marginRight="4" as={FaRegHeart}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}>

            </Icon>

            {/* Icon Comment */}
            <Icon boxSize="6" marginRight="4" as={FaRegComment}
            onClick = {() => setDisplayInputComment(true)}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}>
    
            </Icon>

            {/* Icon Option */}
            <Icon boxSize="6" as={BsThreeDotsVertical}
            sx={{_hover: {
                cursor: "pointer",
                color: "blue"
            }}}></Icon>

        </Box> 

        {/* Caption Box */}
        <Box marginY = "2" paddingX = "3">
            <Text display="inline" fontWeight="bold" marginRight="2">
                {username}</Text>
            <Text display="inline">
                {caption}</Text>
        </Box>

        {/* Comment Box */}
        <Box marginY = "3" paddingX = "3">

            <Text fontWeight="bold">Comments</Text>
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