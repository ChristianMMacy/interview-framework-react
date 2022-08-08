export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

/**
 * Gets a list of users from the API.
 */
async function getUsers(): Promise<User[]> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`);
    return response.json();
}

async function getUser(userId: number | undefined): Promise<User> {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}`);
    return response.json();
}

export {
    getUsers,
    getUser
}