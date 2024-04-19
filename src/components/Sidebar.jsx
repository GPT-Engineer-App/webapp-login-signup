import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Text, VStack } from "@chakra-ui/react";
import { FaCopy, FaDoorOpen } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">App Name</DrawerHeader>
        <DrawerBody>
          <VStack spacing={4} align="stretch">
            <Box>
              <Image borderRadius="full" boxSize="50px" src="https://via.placeholder.com/50" alt="User Portrait" />
              <Text>Username</Text>
            </Box>
            <Text>Wallet Balance: Placeholder</Text>
            <Button leftIcon={<FaCopy />}>Copy Referral Code</Button>
            <Text>Credit Score: Placeholder</Text>
            <Text>Languages: DE, FR, IT, SE, EN</Text>
            <Button>Deposit</Button>
            <Button>Withdraw</Button>
            <Button>Personal Information</Button>
            <Button>All Records</Button>
            <Button>Bind USDT Wallet Address</Button>
            <Button>Contact</Button>
            <Button>Terms and Conditions</Button>
            <Button>Latest Events</Button>
            <Button leftIcon={<FaDoorOpen />}>Log Out</Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
