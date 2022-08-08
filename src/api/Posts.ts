export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function getPost(postId: number): Promise<Post> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}`);
    return response.json();
}

async function getUserPosts(userId: number): Promise<Post[]> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}/posts`);
    return response.json();
}

export {
    getPost,
    getUserPosts
}
