import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";


function FeedPost({img, username, avatar}) {

  return <>
  <PostHeader username={username} avatar={avatar} />
  <Box my={2}>
    <Image borderRadius={2} overflow={'hidden'} src={img} alt={username} />
  </Box>
  <PostFooter username={username} />
  </>;
}

export default FeedPost;
