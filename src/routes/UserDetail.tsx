import { Avatar, Box, Center, Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { getUserPosts } from 'api/Posts'
import { getUser } from 'api/Users'
import { useNavigate, useParams } from 'react-router-dom'


export default function UserDetail() {
    const { userId } = useParams()
    const navigate = useNavigate()
    const { data: user } = useQuery(['user'], () => getUser(Number(userId)))
    const { data: userPosts } = useQuery(['userPosts'], () => getUserPosts(Number(userId)))

    const contactFields = [
        { title: 'Company:', text: user?.company.name },
        { title: 'BS:', text: user?.company.bs },
        { title: 'Catch Phrase:', text: user?.company.catchPhrase },
        { title: 'Website:', text: user?.website },
        { title: 'Address:', text: `${user?.address?.suite}, ${user?.address?.street}, ${user?.address?.city}, ${user?.address?.zipcode}` }
    ]

    return (
        <Grid templateColumns='repeat(12, 1fr)' sx={{ pt: 5 }}>
            <GridItem colStart={2} colEnd={12}>
                <Grid templateColumns='repeat(12, 1fr)' gap={{ base: 0, lg: 20 }}>
                    <GridItem colStart={{ base: 1, lg: 2 }} colEnd={{ base: 12, lg: 6 }}>
                        <Center sx={{ flexDirection: 'column', mb: 10 }}>
                            <Avatar bg="brand.main" w="150" h="150" />
                            <Text fontSize={{ base: '3xl', xl: '4xl' }} className='font-bold'>{user?.name}</Text>
                            <Text fontSize={{ base: 'lg', xl: '2xl' }}>{user?.phone}</Text>
                            <Text fontSize={{ base: 'lg', xl: '2xl' }}>{user?.email}</Text>
                        </Center>
                        <Text fontSize={{ base: 'lg', xl: '2xl' }} className='font-bold'>Contact:</Text>
                        <Divider sx={{ my: 2 }} />
                        <Center sx={{ flexDirection: 'column', mb: 10 }}>
                            <Box>
                                {
                                    contactFields.map(cf => (
                                        <Box sx={{ pl: 5 }}>
                                            <Text fontSize={{ base: 'md', xl: 'lg' }} className='font-bold'>{cf.title}</Text>
                                            <Text fontSize={{ base: 'md', xl: 'lg' }} sx={{ pl: 5 }}>{cf.text}</Text>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem colStart={{ base: 1, lg: 7 }} colEnd={12}>
                        <Text fontSize="2xl" className='font-bold' sx={{ mt: { base: 20, lg: 0 } }}>Posts:</Text>
                        <Box sx={{ overflow: 'auto', height: { base: 'auto', lg: '80vh' } }}>
                            {
                                userPosts?.map(post => (
                                    <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/posts/' + post.id, { replace: true })}>
                                        <Divider />
                                        <Box sx={{ width: '100%', my: 2 }}>
                                            <Text>{post.title}</Text>
                                            <Image src={`https://picsum.photos/700/300?random=${post.id}`} sx={{ width: '100%', height: 'auto' }} />
                                            <Text>{post.body}</Text>
                                        </Box>
                                        <Divider />
                                    </Box>
                                ))
                            }
                        </Box>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}