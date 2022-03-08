import { Link } from 'react-router-dom'
import { Box, Spacer, Avatar, Button, Flex, Center, Menu, MenuButton, MenuGroup, MenuDivider, MenuList, MenuItem } from '@chakra-ui/react'


const Navbar = () =>{
    return (
    <Menu>
        <Link to="/">
            <MenuButton  sx={{position: "sticky",top: 0}} as={Button} colorScheme='blue'>Home
            </MenuButton>
        </Link>

        <Link to="/profile">
            <MenuButton sx={{position: "sticky",top: 0}} as={Button} colorScheme='pink'>Profile
            </MenuButton>
        </Link>
    </Menu>
    )
}

export default Navbar