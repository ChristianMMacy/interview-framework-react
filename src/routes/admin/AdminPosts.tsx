import { useContext } from 'react'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { getUsers, User } from 'api/Users'
import { useNavigate } from 'react-router-dom'
import { PostContext } from 'routes/postDetail/PostContext'
import { truncateStr } from 'utility/display'


export default function AdminPosts() {
    const navigate = useNavigate()
    const { posts } = useContext(PostContext)
    const { data: users } = useQuery(['users'], getUsers)

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Title</Th>
                        <Th>Body</Th>
                        <Th>User's Name</Th>
                        <Th>User's Email</Th>
                        <Th>User's Phone</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        posts?.map(post => {
                            const user = users?.find((u: User) => u.id === post.userId)
                            return (
                                <Tr sx={{ cursor: 'pointer' }} onClick={() => navigate('/posts/' + post.id, { replace: true })}>
                                    <Td>{truncateStr(post.title)}</Td>
                                    <Td>{truncateStr(post.body)}</Td>
                                    <Td>{user?.name}</Td>
                                    <Td>{user?.email}</Td>
                                    <Td>{user?.phone}</Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}