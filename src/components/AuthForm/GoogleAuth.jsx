import { Flex, Image, Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <>
              <Flex justifyContent={"center"} align={"center"} cursor={"pointer"}>
            <Image  w={5} src="/google.png" alt="Google Logo" />
            <Text mx={2} color={"blue.500"}>
              Continue with google
            </Text>
          </Flex>
    </>
  )
}

export default GoogleAuth