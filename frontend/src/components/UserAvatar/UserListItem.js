import React from "react";
import { Avatar, Text, HStack, VStack } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <HStack
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size={"sm"}
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <VStack alignItems="flex-start" gap=".5px">
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </VStack>
    </HStack>
  );
};

export default UserListItem;
