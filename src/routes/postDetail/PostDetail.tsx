import { useCallback, useContext, useEffect, useState } from 'react'
import { Avatar, Box, Center, Divider, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getUser, User } from 'api/Users'
import RelatedPostCarousel from 'routes/postDetail/RelatedPostCarousel'
import { getComments } from 'api/Comments'
import { NavigationContext } from 'NavigationContext'
import { PostContext } from './PostContext'
import { getPost } from 'api/Posts'
import { truncateStr } from 'utility/display'


export default function PostDetail() {
    const navigate = useNavigate()
    const { posts } = useContext(PostContext)
    const { setBreadCrumbs } = useContext(NavigationContext)
    const { postId } = useParams()
    const { data: post, isError, refetch: fetchPost } = useQuery(['post'], () => getPost(Number(postId)))
    const { data: comments, isError: commentError, refetch: fetchComments } = useQuery(['comments'], () => getComments(Number(postId)))
    const [user, setUser] = useState<User>()

    // Retrieves the user that created this post
    const fetchUser = useCallback(async () => {
        const userData = await getUser(post?.userId)
        userData && setUser(userData)
    }, [post])

    useEffect(() => {
        if (post) {
            fetchUser()
            setBreadCrumbs([
                { link: '/posts', title: 'Posts' },
                { link: '/posts/' + post.id, title: truncateStr(post.title, 10) }
            ])
        }
    }, [post, fetchUser, setBreadCrumbs])

    useEffect(() => {
        fetchPost()
        fetchComments()
        fetchUser()
    }, [postId, fetchPost, fetchComments, fetchUser])


    if (!user) return <></>
    else if (isError) return <Navigate to='/error' />

    return (
        <Center sx={{ my: 10 }}>
            <Grid templateRows='5'>
                <GridItem sx={{ minHeight: 'fit-content' }}>
                    <SimpleGrid sx={{ display: 'flex' }}>
                        <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => navigate('/users/' + user.id, { replace: true })}>
                            <Avatar bg="brand.main" sx={{ ml: 5, mb: 5 }} />
                            <Text fontSize="2xl" className="font-bold" sx={{ ml: 5, mb: 5 }}>{user.name}</Text>
                        </Box>
                        <Box sx={{ display: { base: 'none', md: 'flex' } }}>
                            <Text fontSize="2xl" className="font-bold" sx={{ ml: 5, mb: 5 }}>•</Text>
                            <Text fontSize="2xl" className="font-bold" sx={{ ml: 5, mb: 5 }}>{user.website}</Text>
                        </Box>
                    </SimpleGrid>
                    <Grid templateColumns='repeat(12, 1fr)' sx={{ width: '100%', py: 4 }}>
                        <GridItem
                            colStart={{ base: 1, md: 2 }}
                            colEnd={{ base: 13, md: 12, xl: 8 }}
                            h='10'
                            bg='white'
                            px={{ base: 0, xl: 10 }}
                            sx={{ minHeight: '100%', height: 'fit-content' }}
                        >
                            <Center>
                                <Image
                                    src={`https://picsum.photos/700/300?random=${post?.id}`}
                                    sx={{
                                        width: '100%', height: 'auto', minHeight: '100%',
                                        boxShadow: { base: '0px 0px 5px 1px lightgrey', xl: 'none' }
                                    }}
                                />
                            </Center>
                        </GridItem>
                        <GridItem colStart={{ base: 1, md: 2, xl: 8 }} colEnd={{ base: 13, md: 12 }} h='10' bg='#fafafa' p={10}
                            sx={{ minHeight: '100%', height: 'fit-content', boxShadow: '0px 0px 5px 1px lightgrey' }}
                        >
                            <Text fontSize={{ base: 'xl', lg: '3xl' }} className='font-bold'>{post?.title}</Text>
                            <Text fontSize={{ base: 'md', lg: 'xl' }} sx={{ mt: 10 }}>{post?.body}</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Divider sx={{ my: 5 }} />
                </GridItem>
                <GridItem>
                    {comments && comments.length > 0 && <Text fontSize="xl" className="font-bold" sx={{ ml: 5 }}>Comments:</Text>}
                    <Grid templateColumns='repeat(12, 1fr)' sx={{ width: '100%' }}>
                        <GridItem colStart={2} colSpan={10}>
                            {
                                !commentError && comments?.map(comment => (
                                    <Box key={comment.id} sx={{ my: 10 }}>
                                        <Box sx={{
                                            display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between',
                                            flexDirection: { base: 'column', md: 'row' }
                                        }}>
                                            <Text
                                                align={{ base: 'center', md: 'left' }}
                                                fontSize={{ base: 'md', md: "lg" }}
                                                className="font-bold" sx={{ mt: 3 }}>
                                                {comment.name}
                                            </Text>
                                            <Text
                                                align={{ base: 'center', md: 'left' }}
                                                fontSize={{ base: 'xs', md: "sm" }}
                                                className="font-bold">
                                                {comment.email}
                                            </Text>
                                        </Box>
                                        <Text align={{ base: 'center', md: 'left' }} fontSize={{ base: "sm", md: "md" }}>{comment.body}</Text>
                                    </Box>
                                ))
                            }
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Divider sx={{ my: 5, display: { base: 'none', md: 'block' } }} />
                </GridItem>
                <GridItem>
                    {
                        posts &&
                        <Box sx={{ display: { base: 'none', md: 'block' } }}>
                            <Text fontSize="xl" className="font-bold" sx={{ ml: 5, mb: 50 }}>Related Posts:</Text>
                            <RelatedPostCarousel posts={posts.slice(0, 15)} />
                        </Box>
                    }
                </GridItem>
            </Grid>
        </Center>
    )
}