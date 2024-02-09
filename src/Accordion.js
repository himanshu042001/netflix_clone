import React, { useState } from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Icon, Button, Input, Flex } from '@chakra-ui/react';
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';

const AccordionComponent = () => {
  const [accordionIndex, setAccordionIndex] = useState(null);

  const handleAccordionChange = (index) => {
    if (accordionIndex === index) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(index);
    }
  };

  return (
    <>
    <Box
      bg="black"
      height="180vh"
      display="flex"
     
      alignItems="center"
      color="white"
    >
      <Box maxWidth="1100px" mx="auto" mt="4" p="40px" >
        <Text fontSize="50px" fontWeight="bold" mb="4">Frequently Asked Questions</Text>
        <Accordion allowToggle maxWidth="900px">
          <AccordionItem  bg="#333844" p="15px" mb="5px" mt="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  What is Netflix?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  fontSize="24px">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </AccordionPanel>
          </AccordionItem>
          {/* Repeat the same structure for each row */}
          <AccordionItem  bg="#333844" p="15px" mb="5px" mt="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                  How much does Netflix cost?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="24px">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="#333844" p="15px" mb="5px" mt="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                Where can I watch?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="24px">
           
Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem  bg="#333844" p="15px" mb="5px" mt="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                How do I cancel?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4 }  fontSize="24px">
           
Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="#333844" p="15px" mb="5px" mt="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                What can I watch on Netflix?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="24px">
          
Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem  bg="#333844" p="15px" mb="5px" mt="5px">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="24px">
                Is Netflix good for kids?
                </Box>
                <AddIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}  fontSize="24px">
          
The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.

            </AccordionPanel>
          </AccordionItem>

          {/* Add the remaining rows here */}
        </Accordion>
        <Text p="10px" fontWeight="600" fontSize="22px" marginTop="50px">Ready to watch? Enter your email to create or restart your membership.</Text>
        <Flex mt="4" justify="center" alignItems="center" marginTop="20px">
        
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
    width="450px"

  />
</Box>
          <Button bg="red.500" size="lg" border="5px" ml="6px" style={{ filter: 'brightness(150%)' }}>
            Get Started  <Icon as={ChevronRightIcon} />
          </Button>
        </Flex>
      </Box>
{/* Form */}

    </Box>
    
   
        </>
    
  );
};

export default AccordionComponent;
