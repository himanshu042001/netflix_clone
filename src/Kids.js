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
            <Image src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="Mobile" />
            
          </Box>
          <Box flex="1">
            <Flex flexDirection="column" alignItems="flex-start">
              <Text fontSize="60px" fontWeight="700" p="-1220px">
               Create profile for kids
              </Text>
              <Text fontSize="25px" fontWeight="500">
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Mobile;
