import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

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
            Enjoy on your TV
          </Text>
          <Text fontSize="30px" fontWeight="400">
            Watch on smart TVs, PlayStation, Xbox,
            <br />
            Chromecast, Apple TV, Blu-ray players and more.
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
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="https://i.gifer.com/HqzB.mp4" type="video/mp4" />
          </video>
        </Box>
      </Flex>
    </Box>
  );
};

export default Tv;
