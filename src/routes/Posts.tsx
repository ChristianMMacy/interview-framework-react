import {getPosts} from "api/Posts";
import {getUsers} from "api/Users";
import {useQuery} from "@tanstack/react-query";
import {Box, Heading, Image, Text, VStack} from "@chakra-ui/react";

/**
 * Displays a list of posts.
 * @constructor
 */
function Posts() {
    const {data: posts, isLoading, isError} = useQuery(['posts'], getPosts)
    const {data: users } = useQuery(['users'], getUsers)

    return (
        <VStack spacing={4}>
            <Heading as="h1" size="2xl">Posts</Heading>
            {!isLoading && !isError && posts && posts.map(({id, userId, title, body}) => {
                let userName = "";
                if (Array.isArray(users)) {
                    userName = users.find(u => u.id === userId)?.name
                }

                return (
                        <Box key={id} className="p-5 border-2 border-gray-200 rounded-2xl">
                            <Image src="https://picsum.photos/500/400"/>
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