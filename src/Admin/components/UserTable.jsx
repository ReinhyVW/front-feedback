import { useState, useEffect } from "react";

import { getUsers } from "../domain/getUsers";
import { useSelectUser } from "../domain/selectUser";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const { handleRadioChange } = useSelectUser();

  useEffect(() => {
    holdForData();
  }, []);

  async function holdForData() {
    try {
      const { users } = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }

  return (
    <div className="w-10/12 h-full flex justify-center items-start text-sky-950 text-2xl overflow-scroll">
      <table id="UserTable" className="w-full border-sky-950 p-1 text-center">
        <thead>
          <tr className="bg-sky-200 text-center h-12">
            <th></th>
            <th>ID</th>
            <th>USERNAME</th>
            <th>NAME</th>
            <th>LASTNAME</th>
            <th>ROLE</th>
            <th>FACILITY</th>
          </tr>
        </thead>
        <tbody className="bg-sky-100 text-center">
          {users.map((user, index) => (
            <tr key={user.UserId}>
              <td>
                <input
                  type="radio"
                  name="selected-user"
                  value={user.UserId}
                  onChange={handleRadioChange}
                  defaultChecked={index === 0}
                />
              </td>
              <td>{user.UserId}</td>
              <td>{user.Username}</td>
              <td>{user.MemberName}</td>
              <td>{user.MemberLname}</td>
              <td>{user.RoleLevel}</td>
              <td>{user.FacilityName}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}