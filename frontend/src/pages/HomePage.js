import React from 'react'
import { Container,Box,Text,Tab,TabList,TabPanel,TabPanels,Tabs } from '@chakra-ui/react';
import  Login  from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';

const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
        <Box
         d='flex'
         justifyContent='center'
         alignItems='center'
         p={3}
         bg={'gray.800'}
         w='100%'
         m='40px 0 15px 0'
         borderRadius='lg'
         borderWidth='1px'
        >
            <Text fontSize='4xl' fontFamily='work sans' color='white' textAlign='center'>Talkative</Text>
        </Box>
        <Box bg='gray.800' w='100%' p={4} borderRadius='lg' borderWidth='1px' >
            <Tabs variant='soft-rounded' colorScheme='blue'>
                <TabList>
                    <Tab width='50%'>Login</Tab>
                    <Tab width='50%'>Sigh Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                   <Login/>
                    </TabPanel>
                    <TabPanel>
                      <SignUp/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Container>
  )
}

export default HomePage