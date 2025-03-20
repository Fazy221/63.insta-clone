import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <Box padding={5} borderRadius={4} border="1px solid gray">
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
          {/* ------ OR ------  */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <Flex justifyContent={"center"} align={"center"} cursor={"pointer"}>
            <Image w={5} src="/google.png" alt="Google Logo" />
            <Text mx={2} color={"blue.500"}>
              Continue with google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box padding={5} borderRadius={4} border="1px solid gray">
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color="blue.500"
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
