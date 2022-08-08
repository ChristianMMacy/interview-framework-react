import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Center, Image, Text } from '@chakra-ui/react'
import { Post } from 'api/Posts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SCROLL_WIDTH = 90
const TOTAL_POSTS = 15
const POSTS_PER_VIEW = 3

export default function RelatedPostCarousel({ posts }: { posts: Post[] }) {
    const navigate = useNavigate()

    const [scrollPosition, setScrollPosition] = useState<number>(0)

    const allowScrollRight = Math.abs(scrollPosition) < SCROLL_WIDTH * (TOTAL_POSTS / POSTS_PER_VIEW - 1)
    const allowScrollLeft = scrollPosition < 0

    return (
        <Center>
            <ChevronLeftIcon w={12} h={12}
                sx={allowScrollLeft ? { cursor: 'pointer', '& :hover': { color: 'brand.main' } } : { color: 'grey' }}
                onClick={() => allowScrollLeft && setScrollPosition(sp => sp + 90)}
            />
            <Box sx={{ width: '90vw', overflow: 'hidden' }}>
                <Box sx={{ width: 'fit-content', height: '100%', display: 'flex', transform: `translate(${scrollPosition}vw, 0)`, transition: 'transform 1s' }}>
                    {
                        posts?.map(post => (
                            <Box
                                onClick={() => navigate('/posts/' + post.id, { replace: true })}
                                sx={{ width: '28vw', mx: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                            >
                                <Text fontSize='lg' className='font-bold'>{post?.title}</Text>
                                <Image
                                    src={`https://picsum.photos/700/300?random=${post?.id}`}
                                    sx={{ width: '100%', height: 'auto', mt: 5 }}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <ChevronRightIcon w={12} h={12}
                sx={allowScrollRight ? { cursor: 'pointer', '& :hover': { color: 'brand.main' } } : { color: 'grey' }}
                onClick={() => allowScrollRight && setScrollPosition(sp => sp - 90)}
            />
        </Center>
    )
}