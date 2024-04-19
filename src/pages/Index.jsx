import React, { useState } from "react";
import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useToast, Image } from "@chakra-ui/react";
import { FaUserCircle, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Index = ({ onToggleSidebar }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    accountName: "",
    phoneNumber: "",
    withdrawPassword: "",
    confirmWithdrawPassword: "",
    invitationCode: "",
    agreedTerms: false,
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.withdrawPassword !== formData.confirmWithdrawPassword) {
      toast({
        title: "Error",
        description: "Withdraw passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (isSignUp && !formData.agreedTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Here you would typically handle the form submission, like sending data to a server
    toast({
      title: "Success",
      description: `Successfully ${isSignUp ? "registered" : "logged in"}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      accountName: "",
      phoneNumber: "",
      withdrawPassword: "",
      confirmWithdrawPassword: "",
      invitationCode: "",
      agreedTerms: false,
    });
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container maxW="lg" py={8}>
      <Flex justifyContent="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHBsYWNlaG9sZGVyfGVufDB8fHx8MTcxMzUyNDMxMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
      </Flex>
      <Box mt={8} p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
        <Stack spacing={4}>
          <Heading textAlign="center">{isSignUp ? "Sign Up" : "Login"}</Heading>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <FormControl isRequired>
                  <FormLabel>Account Name</FormLabel>
                  <Input name="accountName" type="text" value={formData.accountName} onChange={handleInputChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Withdraw Password</FormLabel>
                  <Input name="withdrawPassword" type="password" value={formData.withdrawPassword} onChange={handleInputChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Confirm Withdraw Password</FormLabel>
                  <Input name="confirmWithdrawPassword" type="password" value={formData.confirmWithdrawPassword} onChange={handleInputChange} />
                </FormControl>
                <FormControl>
                  <FormLabel>Invitation Code</FormLabel>
                  <Input name="invitationCode" type="text" value={formData.invitationCode} onChange={handleInputChange} />
                </FormControl>
                <FormControl isRequired>
                  <Checkbox name="agreedTerms" isChecked={formData.agreedTerms} onChange={handleInputChange}>
                    I agree to the terms and conditions
                  </Checkbox>
                </FormControl>
              </>
            )}
            {!isSignUp && (
              <>
                <FormControl isRequired>
                  <FormLabel>Account Name or Phone Number</FormLabel>
                  <Input name="accountName" type="text" value={formData.accountName} onChange={handleInputChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input name="withdrawPassword" type="password" value={formData.withdrawPassword} onChange={handleInputChange} />
                </FormControl>
              </>
            )}
            <Button mt={4} width="full" type="submit" colorScheme="blue" leftIcon={isSignUp ? <FaUserPlus /> : <FaSignInAlt />}>
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </form>
          <Text align="center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <Button variant="link" colorScheme="blue" onClick={toggleForm}>
              {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </Text>
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;
