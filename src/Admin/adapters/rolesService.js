export async function fetchRoles() {
    const response = await fetch('https://feedback-back-dhg.azurewebsites.net/roles');
    const { roles } = await response.json();
    return roles;
}