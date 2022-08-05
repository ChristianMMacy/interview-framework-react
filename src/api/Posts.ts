interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

/**
 * Gets a list of posts from the API.
 */
async function getPosts(): Promise<Post[]> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts`);
    return response.json();
}

export {
    getPosts
}