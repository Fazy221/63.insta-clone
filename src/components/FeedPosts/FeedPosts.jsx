import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
            <SkeletonCircle size="10"></SkeletonCircle>
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height="10px" w={"200px"}></Skeleton>
              <Skeleton height="10px" w={"200px"}></Skeleton>
            </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Content Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost username="burakormezz" img="/img1.png" avatar="/img1.png" />
          <FeedPost username="josh" img="/img2.png" avatar="/img2.png" />
          <FeedPost username="janedoe" img="/img3.png" avatar="/img3.png" />
          <FeedPost username="johndoe" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
