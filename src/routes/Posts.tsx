import { getUsers } from "api/Users";
import { useQuery } from "@tanstack/react-query";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "./postDetail/PostContext";

/**
 * Displays a list of posts.
 * @constructor
 */
function Posts() {
    const navigate = useNavigate()
    const { posts } = useContext(PostContext)
    const { data: users } = useQuery(['users'], getUsers)

    return (
        <VStack spacing={4} className="pt-5 max-w-2xl m-auto">
            <Heading as="h1" size="2xl">Posts</Heading>
            {posts && posts.map(({ id, userId, title, body }) => { // !isLoading && !isError && 
                let userName = "";
                if (Array.isArray(users)) {
                    userName = users.find(u => u.id === userId)?.name ?? ""
                }

                return (
                    <Box
                        key={id}
                        onClick={() => navigate(`/posts/${id}`, { replace: true })}
                        className="p-5 border-2 border-gray-200 rounded-2xl cursor-pointer transition ease-in-out duration-500 hover:scale-105"
                    >
                        <Image src={`https://picsum.photos/700/300?random=${id}`} />
                        <Heading as="h2" size="xl">{title}</Heading>
                        {userName && <Heading as="h3" size="md">By {userName}</Heading>}
                        <Text>{body}</Text>
                    </Box>
                )
            }
            )}
        </VStack>
    )
}

export default Posts