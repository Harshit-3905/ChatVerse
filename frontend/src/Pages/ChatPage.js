import { Box, Flex } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex
        d="flex"
        flexDir={"row"}
        justifyContent="space-between"
        w="100%"
        h="90vh"
        p="10px"
      >
        <Box>{user && <MyChats />}</Box>
        <Box> {user && <ChatBox />}</Box>
      </Flex>
    </div>
  );
};

export default ChatPage;
