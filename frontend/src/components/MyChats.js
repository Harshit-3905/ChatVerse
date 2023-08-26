import React, { useEffect } from "react";
import { ChatState } from "../Context/ChatProvider";
import { useState } from "react";
import { VStack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelctedChat, chats, setChats } = ChatState();
  const toast = useToast();
  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured",
        description: "Failed to Load the Chat",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);
  return (
    <Box
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      w={{ base: "100%", md: "95%" }}
      p={3}
      fontFamily={"Quicksand"}
      fontSize={{ base: "20px", md: "24px" }}
      textAlign={"center"}
      bg="white"
      borderRadius="lg"
      borderWidth="1px"
    >
      <VStack
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily={"Quicksand"}
        w="100%"
        justifyContent={"space-between"}
        alignItems={"center"}
      ></VStack>
      My Chats
    </Box>
  );
};

export default MyChats;
