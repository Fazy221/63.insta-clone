import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container
        maxW={"container.md"}
        padding={0}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Column */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img" />
          </Box>
          {/* Right Column */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"Center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="Playstore logo"></Image>
              <Image src="/microsoft.png" h={"10"} alt="Microsoft logo"></Image>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
