import { Avatar, Box, Button, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip , useDisclosure, useToast} from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,} from '@chakra-ui/react'
import React, { useState } from 'react'
import {BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import ChatLoading from '../ChatLoading';
import { useHistory } from 'react-router-dom';
import UserListItem from '../UserAvatar/UserListItem';
import axios from 'axios'
const SideDrawer = () => {
  
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = ChatState();
  const  history = useHistory()
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    history.push('/');

  }

  const handleSearch = async () => {
    if(!search){
      toast({
        title: "Enter name to Search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try{
       setLoading(true);

       const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
       };
       const {data} = await axios.get(`/api/user?search=${search}`, config)
       
       setSearchResult(data)
    }  catch(error){
        toast({
          title: "Error occured",
          description: "failed to load search results",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
    } finally {
      setLoading(false);
    }

  }

  const accessChat = () => {

  }
  return (
    <>
   <Box
   display='flex'
   alignItems='center' 
   justifyContent='space-between'
   bg='white'
   w='100%'
   p='5px 10px 5px 10px'
   borderRadius='lg'
   borderWidth='5px'
   >
    <Tooltip label='search users to chat' hasArrow placement='bottom-end'>
      <Button variant='ghost' onClick={onOpen}>
        <i class='fas fa-search'></i>
        <Text display={{base:'none', md:'flex'}}>
          Search User
        </Text>
      </Button>
    </Tooltip>
    <Text fontSize='2xl' fontFamily='work sans' color='black'>
      Talk-A-Tive
    </Text>
    <div>
      <Menu>
        <MenuButton p={1}>
          <BellIcon color='gray.800' w={8} h={8}/>
        </MenuButton>
        {/* <MenuList></MenuList> */}
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} >
          <Avatar size='sm'cursor='pointer'  src={user.pic} name={user.name} />
        </MenuButton>
        <MenuList>
          <ProfileModal user={user}>
          {/* <MenuItem color='gray.800'>My Profile</MenuItem> */}
          </ProfileModal>
          <MenuDivider/>
          <MenuItem color='gray.800' onClick={logoutHandler}>LogOut</MenuItem>
        </MenuList>
      </Menu>
    </div>
   </Box>
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
        <DrawerBody>
        <Box display='flex' pb={2}>
          <Input placeholder='Search by name or email' mr={2} value={search} onChange={(e)=>setSearch(e.target.value)} />
          <Button onClick={handleSearch}>Go</Button>
        </Box>
        {loading ? (
            <ChatLoading/>
          ) : (
              searchResult?.map( (user)=>(
                <UserListItem key={user._id} user={user} handleFunction={()=>accessChat(user._id)}/>
              ))
          )
        }
       </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default SideDrawer