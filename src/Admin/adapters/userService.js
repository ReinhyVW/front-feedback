export async function fetchUsers() {
    const response = await fetch('http://localhost:4000/user');
    const { users } = await response.json();
    return users;
}  