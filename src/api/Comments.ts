export interface Comment {
    id: number,
    postId: number,
    name: string,
    email: string,
    body: string
}

/**
 * Gets a list of comments from the API.
 */
async function getComments(postId: number): Promise<Comment[]> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/posts/${postId}/comments`)
    return response.json()
}

export {
    getComments
}