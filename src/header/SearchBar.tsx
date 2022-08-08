import { SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Input, InputGroup, InputLeftElement, Popover, PopoverAnchor, PopoverBody, PopoverContent, Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostContext } from 'routes/postDetail/PostContext'


export default function SearchBar({ color }: { color: string | undefined }) {
    const navigate = useNavigate()
    const { posts, getPosts } = useContext(PostContext)
    const [search, setSearch] = useState<string>("")

    const handleNavigate = (id: number | undefined) => {
        setSearch('')
        navigate('/posts/' + id, { replace: true })

    }

    useEffect(() => {
        !posts && getPosts()
    }, [posts, getPosts])

    const filteredPosts = posts
        ?.filter(post => [post.title, post.body]
            .some(content => content.includes(search)))
        ?.slice(0, 20)

    return (
        <>
            <Popover isOpen={search?.length > 0 && (filteredPosts || '').length > 0} isLazy offset={[0, 0]} matchWidth autoFocus={false}>
                <PopoverAnchor>
                    <InputGroup sx={{ '& *': { color: color ?? 'white' } }}>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />
                        <Input
                            type='text'
                            placeholder='Search Posts'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </InputGroup>
                </PopoverAnchor>
                <PopoverContent>
                    <PopoverBody>
                        <Box sx={{ maxHeight: '50vh', overflow: 'auto' }}>
                            {
                                filteredPosts?.map(post => (
                                    <Box sx={{ cursor: 'pointer' }} onClick={() => handleNavigate(post.id)}>
                                        <Divider />
                                        <Text sx={{ my: 2 }}>{post.title}</Text>
                                        <Divider />
                                    </Box>
                                ))
                            }
                        </Box>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}