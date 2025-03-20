import {
  Avatar,
  Box,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.200"}
        aspectRatio={1 / 1}
        position={"relative"}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          right={0}
          left={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size="20" />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>
      <Modal isCentered size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black"}>
          {/* <ModalHeader>Modal Title</ModalHeader> */}

          <ModalBody display={"flex"} flexDirection={"row"} p={0}>
            <Flex flex={6}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={img}
              ></Image>
            </Flex>
            <VStack ml={10} flex={6}>
              {/* Profile Header */}
              <Flex
                w={"100%"}
                justifyContent={"space-between"}
                borderBottom={"1px solid"}
                borderColor={"whiteAlpha.400"}
                alignItems={"center"}
                paddingBottom={2}
              >
                <Flex alignItems={"center"} gap={2}>
                  <Avatar
                    src="/profilepic.png"
                    name="avatarprogramming_"
                    size={"sm"}
                  />
                  <Text fontSize={12} fontWeight={"bold"}>
                    avatarprogramming_
                  </Text>
                </Flex>
                <AiFillDelete />
              </Flex>
              {/* User Comments */}
              <VStack
                w={"100%"}
                justifyContent={"center"}
                borderBottom={"1px solid"}
                borderColor={"whiteAlpha.400"}
                alignItems={"left"}
                paddingBottom={1}
              >
                {/* Containers */}
                <VStack gap={2} overflowY={"scroll"} maxH={"460px"}>
                  {/* User name container */}
                  <Flex gap={4}>
                    <Avatar
                      src="/img1.png"
                      name="avatarprogramming_"
                      size={"sm"}
                    />
                    <Box gap={4}>
                      <Text w={"max-content"} fontSize={12} fontWeight={"bold"}>
                        user01
                      </Text>
                      <Text fontSize={12}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque illo vitae beatae,
                      </Text>
                      <Text fontSize={12} color={"gray"} fontWeight={"600"}>
                        1d ago
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={4}>
                    <Avatar src="/img2.png" name="user02" size={"sm"} />
                    <Box gap={4}>
                      <Text w={"max-content"} fontSize={12} fontWeight={"bold"}>
                        user02
                      </Text>
                      <Text fontSize={12}>
                        Ad dolorem praesentium itaque! Molestiae sunt obcaecati
                        nobis, distinctio eaque blanditiis, vero, veritatis
                        adipisci odit et repudiandae soluta illo facere
                        perspiciatis. Voluptatem excepturi eos similique ipsa,
                        consequatur impedit officiis eius dignissimos labore
                        quos?
                      </Text>
                      <Text fontSize={12} color={"gray"} fontWeight={"600"}>
                        1d ago
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={4}>
                    <Avatar src="/img3.png" name="user03" size={"sm"} />
                    <Box gap={4}>
                      <Text w={"max-content"} fontSize={12} fontWeight={"bold"}>
                        user03
                      </Text>
                      <Text fontSize={12}>
                        Voluptatem excepturi eos similique ipsa, consequatur
                        impedit officiis eius dignissimos labore quos?
                      </Text>
                      <Text fontSize={12} color={"gray"} fontWeight={"600"}>
                        1d ago
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={4}>
                    <Avatar src="/img3.png" name="user03" size={"sm"} />
                    <Box gap={4}>
                      <Text w={"max-content"} fontSize={12} fontWeight={"bold"}>
                        user03
                      </Text>
                      <Text fontSize={12}>
                        Voluptatem excepturi eos similique ipsa, consequatur
                        impedit officiis eius dignissimos labore quos?
                      </Text>
                      <Text fontSize={12} color={"gray"} fontWeight={"600"}>
                        1d ago
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={4}>
                    <Avatar src="/img3.png" name="user03" size={"sm"} />
                    <Box gap={4}>
                      <Text w={"max-content"} fontSize={12} fontWeight={"bold"}>
                        user03
                      </Text>
                      <Text fontSize={12}>
                        Voluptatem excepturi eos similique ipsa, consequatur
                        impedit officiis eius dignissimos labore quos?
                      </Text>
                      <Text fontSize={12} color={"gray"} fontWeight={"600"}>
                        1d ago
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap={4}>
                    <Avatar src="/img3.png" name="user03" size={"sm"} />
                    <Box gap={4}>
                      <Text w={"max-content"} fontSize={12} fontWeight={"bold"}>
                        user03
                      </Text>
                      <Text fontSize={12}>
                        Voluptatem excepturi eos similique ipsa, consequatur
                        impedit officiis eius dignissimos labore quos?
                      </Text>
                      <Text fontSize={12} color={"gray"} fontWeight={"600"}>
                        1d ago
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </VStack>
            </VStack>
            <VStack flex={1}>
              <ModalCloseButton />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;
