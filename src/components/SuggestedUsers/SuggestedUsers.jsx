import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

function SuggestedUsers() {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
                <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>
                    See All
                </Text>
            </Flex>
            <SuggestedUser name="Dan Abrahmov" followers={1392} avatar="http://bit.ly/dan-abramov"></SuggestedUser>
            <SuggestedUser name="Ryan Florence" followers={567} avatar="http://bit.ly/ryan-florence"></SuggestedUser>
            <SuggestedUser name="Christian Nwamba" followers={759} avatar="http://bit.ly/code-beast"></SuggestedUser>

            <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
            © Built by {" "}
            <Link href="http://www.youtube.com/@asaprogrammer_" target="_blank" color='blue.500' fontSize={14}>As a Programmer</Link>
            </Box>
        </VStack>
    )
}

export default SuggestedUsers
