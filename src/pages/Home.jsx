import React from "react";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { FaDoorOpen } from "react-icons/fa";

function Home() {
  return (
    <Flex justify="space-between" align="center" p={4}>
      <Flex>
        <Box w="50px" h="50px" bg="blue.500" m={1}></Box>
        <Box w="50px" h="50px" bg="green.500" m={1}></Box>
        <Box w="50px" h="50px" bg="red.500" m={1}></Box>
        <Box w="50px" h="50px" bg="yellow.500" m={1}></Box>
      </Flex>
      <Heading>Company Name</Heading>
      <IconButton aria-label="Logout" icon={<FaDoorOpen />} onClick={() => console.log("Logout")} />
    </Flex>
  );
}

export default Home;
