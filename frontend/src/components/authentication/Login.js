
import React, { useState } from 'react'
import { FormControl, FormLabel} from '@chakra-ui/form-control'
import {Input, InputGroup, InputRightElement} from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Login = () => {
    const [Show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleClick = () => setShow(!Show);
    const submitHandler = () => {};

  return (
    <VStack spacing='5px'>
        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
            type={Show? 'text':'password'}
            placeholder='Enter Your Password'
            onChange={(e)=>setPassword(e.target.value)} 
            />
            <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm'onClick={handleClick}>
                    { Show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button colorScheme='blue' width={'100%'} style={{marginTop:15}} onClick={submitHandler}>Log In</Button>
    </VStack>
  )
}

export default Login
