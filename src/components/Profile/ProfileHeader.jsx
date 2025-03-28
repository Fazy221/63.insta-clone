import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifyContent={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          src="/profilepic.png"
          name="As a Programmer"
          alt="As a Programmer logo"
        ></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>asaprogrammer_</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.200" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: "4" }}>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          <Text fontSize={{base:'xs', md:'sm'}}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              175
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            As a Programmer
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Tutorials that are meant to level up your skills as a programmer.
        </Text>
      </VStack>
    </Flex>
  );
}

export default ProfileHeader;
