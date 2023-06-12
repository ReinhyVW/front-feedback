export async function fetchRoles() {
    const response = await fetch('http://localhost:4000/roles');
    const { roles } = await response.json();
    return roles;
}