import React from 'react';
import {
  Box,
  Flex,
  Button,
  Text,
  Input,
} from '@chakra-ui/react';
// 1. Import
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';




const CustomComponent = () => {
  return (
    <Box
      backgroundImage="url('https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      width="100%"
      position="relative"
      filter="brightness(0.8) contrast(1.4)"
      
    >
      {/* Logo */}
      <Box position="absolute" top="20px" left="20px">
        <Text fontSize="40px" color="rgb(229,9,20)"  fontWeight="900" fontFamily="Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif" >NETFLIX</Text>
      </Box>

      {/* Buttons */}
      <Flex position="absolute"  right="80px" p="40px">
      <Button
          variant="link"
          colorScheme="white"
          mr="4"
          borderWidth="3px"
          borderColor='grey'
          p='2px'
          color='white.50'
          rightIcon={<ChevronDownIcon />}
        >
          English
        </Button>
        <Button bg="red.500" style={{ filter: 'brightness(150%)' , color:"white" }} >Sign In</Button>
      </Flex>

      {/* Content */}
      <Box textAlign="center" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" >
      <Text fontSize="34px" fontWeight="700" p="6px" style={{ filter: 'brightness(150%)' }}>Unlimited movies, TV shows and more</Text>

        <Text fontSize="xl" fontWeight="700"  p='6px' color='white'  style={{ filter: 'brightness(150%)' }}>Watch anywhere. Cancel anytime.</Text>
        <Text fontSize="lg" fontWeight="700"  p='6px' color='white'  style={{ filter: 'brightness(150%)' }}>Ready to watch? Enter your email to create or restart your membership.</Text>

        {/* Form */}
        <Flex mt="4" justify="center" alignItems="center">
        <Box
  position="relative"
  display="inline-block"
>
  <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"
    bg="rgba(255, 255, 255, 0.2)" // Semi-transparent white background
    backdropFilter="blur(5px)" // Apply blur effect
    zIndex="-1" // Move the background behind the input field
    borderRadius="md" // Optional: add border radius
    borderColor="white"
    color="white"
  />
  <Input
    variant="filled"
    placeholder="Email address"
    size="lg"
    bg="transparent"
    style={{ filter: 'brightness(150%)' }}
    _placeholder={{ color: 'gray.400' }}
    _focus={{ bg: 'blackAlpha.300' }}
    mr="6px"
    borderWidth="4px"
    borderColor="grey"

  />
</Box>
          <Button bg="red.500" size="lg" border="5px" ml="6px" style={{ filter: 'brightness(150%)' }}>
            Get Started  <Icon as={ChevronRightIcon} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CustomComponent;
