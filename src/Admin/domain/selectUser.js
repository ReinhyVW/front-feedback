export function useSelectUser() {

    const handleRadioChange = (event) => {
        const userId = event.target.value;
        const selectedRow = event.target.closest('tr');
        const username = selectedRow.querySelector('td:nth-child(3)').textContent;
        const memberName = selectedRow.querySelector('td:nth-child(4)').textContent;
        const memberLName = selectedRow.querySelector('td:nth-child(5)').textContent;

        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
        localStorage.setItem('memberName', memberName);
        localStorage.setItem('memberLName', memberLName);
    };

    return { handleRadioChange }
}