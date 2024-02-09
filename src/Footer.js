import React from 'react';
import { Box, Text, Link, Button, Flex, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box
      bg="black"
      color="white"
      py="4"
      maxWidth="100%"
    >
      <Text fontSize="lg" fontWeight="bold" mb="2">Questions? Call 000-800-919-1694</Text>
      
      {/* 1st row */}
      <Flex justifyContent="flex-start" mb="2" p="20px" ml="300px">
        <Text fontSize="sm"  ml="30px" mr="30px">FAQ</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Help Centre</Text>
        <Text fontSize="sm" ml="30px" mr="30px">Account</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Media Centre</Text>
      </Flex>
      
      {/* 2nd row */}
      <Flex justifyContent="flex-start" mb="2" p="20px"  ml="300px">
        <Text fontSize="sm"  ml="30px" mr="30px">Investor Relations</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Jobs</Text>
        <Text fontSize="sm" ml="30px" mr="30px">Ways to Watch</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Terms of Use</Text>
      </Flex>
      
      {/* 3rd row */}
      <Flex justifyContent="flex-startr" mb="2" p="20px"  ml="300px">
        <Text fontSize="sm"  ml="30px" mr="30px">Privacy</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Cookie Preferences</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Corporate Information</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Contact Us</Text>
      </Flex>
      
      {/* 4th row (Repeated 3rd row) */}
      
      {/* 5th row */}
      <Flex justifyContent="flex-start" mb="2" p="20px"  ml="300px">
        <Text fontSize="sm"  ml="30px" mr="30px">Privacy</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Cookie Preferences</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Corporate Information</Text>
        <Text fontSize="sm"  ml="30px" mr="30px">Contact Us</Text>
      </Flex>
      
      {/* 6th row */}
      <Flex justifyContent="flex-start" mb="2" p="20px"  ml="300px">
        <Button variant="link" fontSize="sm" color="white">
          English
          <Icon as={ChevronDownIcon} boxSize={4} />
        </Button>
      </Flex>
      
      {/* 7th row */}
      <Text fontSize="sm" mt="2" p="20px">
        <Link href="#">Netflix India</Link>
      </Text>
    </Box>
  );
};

export default Footer;
