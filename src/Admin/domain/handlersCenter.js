const createCenter = (event) => {
  event.preventDefault();
  const token = localStorage.getItem('token');
  const centerData = {
    facilityName: event.target.facilityName.value,
    locationAddress: event.target.locationAddress.value,
    contactName: event.target.contactName.value,
    contactPhone: event.target.contactPhone.value,
    token: token
  }

  fetch('https://feedback-back-dhg.azurewebsites.net/centersadd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(centerData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });

  document.getElementById("CenterForm").style.display = 'none';

  document.creationForm.removeEventListener('submit', createCenter);

  window.location.reload();
};

const editCenter = async (event) => {
  event.preventDefault();
  const token = localStorage.getItem('token');
  const centerId = localStorage.getItem('centerId');

  const facilityName = event.currentTarget.facilityName.value;
  const locationAddress = event.currentTarget.locationAddress.value;
  const contactName = event.currentTarget.contactName.value;
  const contactPhone = event.currentTarget.contactPhone.value;

  const centerData = {
    centerId: centerId,
    facilityName: facilityName,
    locationAddress: locationAddress,
    contactName: contactName,
    contactPhone: contactPhone,
    token: token
  };

  try {
    const response = await fetch(`https://feedback-back-dhg.azurewebsites.net/centersedit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(centerData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit center');
    }

    const data = await response.json();
    // Handle the response data
    console.log(data);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
  document.getElementById("CenterForm").style.display = 'none';
  window.location.reload();
};


const deleteCenter = () => {
  const token = localStorage.getItem('token');
  const centerId = localStorage.getItem('centerId');

  fetch(`https://feedback-back-dhg.azurewebsites.net/centerdelete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ centerId }), // Pass centerId as an object

  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the server response
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
  window.location.reload();
};

export { createCenter, editCenter, deleteCenter }