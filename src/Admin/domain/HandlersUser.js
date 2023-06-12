const createUser = (event) => {

  event.preventDefault();
  const token = localStorage.getItem('token');
  const userData = {
    username: event.target.username.value,
    passcode: event.target.passcode.value,
    memberName: event.target.memberName.value,
    memberLName: event.target.memberLName.value,
    roleId: document.getElementById('roleId').value,
    centerId: document.getElementById('centerId').value,
    token: token
  };

  fetch('http://localhost:4000/useradd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejar la respuesta del servidor
      console.log(data);
    })
    .catch((error) => {
      // Manejar errores
      console.error(error);
    });
  window.location.reload();
};

const editUser = (event) => {
  event.preventDefault();
  const token = localStorage.getItem('token');
  const userData = {
    userId: localStorage.getItem('userId'),
    username: event.target.username.value,
    passcode: event.target.passcode.value,
    memberName: event.target.memberName.value,
    memberLName: event.target.memberLName.value,
    roleId: document.getElementById('roleId').value,
    centerId: document.getElementById('centerId').value,
  };

  fetch('http://localhost:4000/useredit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())

    .then((data) => {
      // Manejar la respuesta del servidor
      console.log(data)
    })
    .catch((error) => {
      // Manejar errores
      console.error(error);
    });
  window.location.reload();
};

const deleteUser = () => {

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');


  fetch(`http://localhost:4000/userdelete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Envía el token de autenticación en el encabezado Authorization
    },
    body: JSON.stringify({ userId }), // Pass centerId as an object
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejar la respuesta del servidor
      console.log(data);
    })
    .catch((error) => {
      // Manejar errores
      console.error(error);
    });
  window.location.reload();
};

export { createUser, editUser, deleteUser }