export function useSelectCenter() {

    const handleRadioChange = (event) => {
        const centerId = event.target.value;
        const selectedRow = event.target.closest('tr');
        const facilityName = selectedRow.querySelector('td:nth-child(3)').textContent;
        const locationAddress = selectedRow.querySelector('td:nth-child(4)').textContent;
        const contactName = selectedRow.querySelector('td:nth-child(5)').textContent;
        const contactPhone = selectedRow.querySelector('td:nth-child(6)').textContent;

        localStorage.setItem("centerId", centerId);
        localStorage.setItem("facilityName", facilityName);
        localStorage.setItem("locationAddress", locationAddress);
        localStorage.setItem("contactName", contactName);
        localStorage.setItem("contactPhone", contactPhone);
    };

    return { handleRadioChange }
}