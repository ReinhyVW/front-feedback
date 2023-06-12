export async function fetchUsers() {
    const response = await fetch('https://feedback-back-dhg.azurewebsites.net/user');
    const { users } = await response.json();
    return users;
}  