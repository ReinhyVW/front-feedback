import { fetchRoles } from '../adapters/rolesService'

export const getRoles = async () => {
    try {
        const roles = await fetchRoles();
        return { roles };
    } catch (error) {
        console.error(error);
        return { roles: [] };
    }
};