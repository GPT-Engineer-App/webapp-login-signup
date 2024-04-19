import React, { useState } from "react";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaDoorOpen } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Box>
      <Button leftIcon={<FaBars />} position="absolute" top="1rem" left="1rem" onClick={toggleSidebar}>
        Menu
      </Button>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <VStack spacing={4} align="center" mt="4rem">
        <Text fontSize="2xl">Welcome to the Dashboard</Text>
        <Box p="4" borderWidth="1px" borderRadius="lg">
          <Text>Membership Information: Placeholder</Text>
          <Image src="https://via.placeholder.com/150" alt="Membership Level" />
          <Text>Bronze</Text>
        </Box>
        <Box p="4" borderWidth="1px" borderRadius="lg">
          <Text>Today's Earnings: Placeholder</Text>
        </Box>
        <Button leftIcon={<FaDoorOpen />} colorScheme="red">
          Log Out
        </Button>
      </VStack>
    </Box>
  );
}

export default Dashboard;
