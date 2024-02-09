import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

const Tv = () => {
  return (
    <Box
      bg="black"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Flex maxWidth="900px">
        <Box mr="8">
          <Text fontSize="60px" fontWeight="bold">
          Watch everywhere

          </Text>
          <Text fontSize="30px" fontWeight="400">
          Stream unlimited movies and TV shows on
            <br />
            your phone, tablet, laptop, and TV.
          </Text>
        </Box>
        <Box
          display="inline-block"
          position="relative"
          width="300px"
          height="200px"
          borderRadius="md"
          overflow="hidden"
        >
          <Image src="https://kgvtsl-netflix.web.app/images/about_iphone.png" alt="Watch"  />
        </Box>
      </Flex>
    </Box>
  );
};

export default Tv;
