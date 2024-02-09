import React from 'react';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';

const Mobile = () => {
  return (
    <Box
      bg="black"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Box maxWidth="1000px">
        <Flex alignItems="center">
          <Box flex="1" mr="4">
            <Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Mobile" />
            <Button
              colorScheme="red"
              size="lg"
              mt="4"
           
            >
              Download
            </Button>
          </Box>
          <Box flex="1">
            <Flex flexDirection="column" alignItems="flex-start">
              <Text fontSize="60px" fontWeight="700" p="-1220px">
                Download your shows to watch offline
              </Text>
              <Text fontSize="lg">
                Save your favourites easily and always have something to watch.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Mobile;
