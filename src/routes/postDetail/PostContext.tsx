import { useQuery } from '@tanstack/react-query'
import { Post } from 'api/Posts'
import React, { ReactNode } from 'react'


interface PostContextType {
    posts: Post[] | undefined
    getPosts: () => Promise<Post[]> | Post[]
    isLoading: boolean
    isError: boolean
}

interface Props {
    children?: ReactNode
}

const defaultPost = { userId: 0, id: 0, title: '', body: '' }

export const PostContext = React.createContext<PostContextType>({
    posts: [],
    getPosts: async () => [defaultPost],
    isLoading: false,
    isError: false
})

export default function PostContextComponent({ children }: Props) {
    const { data: posts, isLoading, isError } = useQuery(['posts'], getPosts)

    async function getPosts(): Promise<Post[]> {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`);
        return response.json();
    }

    return (
        <PostContext.Provider value={{ posts, getPosts, isLoading, isError }}>
            {children}
        </PostContext.Provider>
    )
}