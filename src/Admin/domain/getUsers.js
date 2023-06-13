import { fetchUsers } from '../adapters/userService.js'

export const getUsers = async () => {
    try {
        const users = await fetchUsers();
        return { users };
    } catch (error) {
        console.error(error);
        return { users: [] };
    }
};