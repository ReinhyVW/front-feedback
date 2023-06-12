import { useState, useEffect } from "react";
import { getCenters } from "../domain/getCenters";
import { getRoles } from "../domain/getRoles";

export default function UserForm() {
    const [username, setUsername] = useState(value => value)
    const [passcode, setPasscode] = useState('')
    const [memberName, setMemberName] = useState(value => value)
    const [memberLName, setMemberLName] = useState(value => value)
    const [roleId, setRoleId] = useState('');
    const [centerId, setCenterId] = useState('');
    const [centers, setCenters] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        holdForData();
    }, []);

    async function holdForData() {
        try {
            const { centers } = await getCenters();
            const { roles } = await getRoles();
            setCenters(centers);
            setRoles(roles);
        } catch (error) {
            console.error('Failed to fetch centers:', error);
        }
    }

    const cancel = (event) => {
        event.preventDefault();
        document.getElementById("UserForm").style.display = 'none';
    }

    return (
        <div id="UserForm" className='w-full h-full left-0 top-0 absolute hidden flex-col items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='w-1/3 h-4/6 text-sky-950 flex flex-col items-center justify-stretch text-2xl bg-sky-200 border-2 border-sky-950 rounded-2xl'>
                <h3>Create New User</h3>

                <form
                    name='creationForm'
                    className='h-full flex flex-col items-center justify-around'
                    id='UserFormAction'
                >
                    <div className='w-10/12'>
                        <label className="p-2">
                            User
                        </label>
                        <input className="w-full bg-sky-100 p-1"
                            type="text"
                            name="username"
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='e.x. CoconutCreek'
                        />

                    </div>
                    <div className='w-10/12'>
                        <label className="p-2">
                            New Password
                        </label>
                        <input className="w-full h-2/3 bg-sky-100 p-1"
                            type="text"
                            name="passcode"
                            id='passcode'
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                            placeholder='●●●●●●●●●●●●'
                        />

                    </div>
                    <div className='w-10/12'>
                        <label className="p-2">
                            First Name
                        </label>
                        <input className="w-full h-2/3 bg-sky-100 p-1"
                            type="text"
                            name="memberName"
                            id='memberName'
                            value={memberName}
                            onChange={(e) => setMemberName(e.target.value)}
                            placeholder='e.x John'
                        />

                    </div>
                    <div className='w-10/12'>
                        <label className="p-2">
                            Last Name
                        </label>
                        <input className="w-full h-2/3 bg-sky-100 p-1"
                            type="text"
                            name="memberLName"
                            id='memberLName'
                            value={memberLName}
                            onChange={(e) => setMemberLName(e.target.value)}
                            placeholder='e.x Doe'
                        />

                    </div>
                    <div className='w-10/12'>
                        <label className="p-2 w-3/5">
                            Center
                        </label>
                        <select name="" className="w-3/5" defaultValue={0} id="centerId" onChange={(e) => setCenterId(e.target.value)} value={centerId}>
                            <option className="bg-sky-50 hover:text-sky-950 text-sky-950" value="0">Please select</option>
                            {centers.map((center) => (
                                <option className="bg-sky-50 hover:text-sky-950 text-sky-950" key={center.CenterId} value={center.CenterId}>
                                    {center.FacilityName}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className='w-10/12'>
                        <label className="p-2 w-2/5">
                            Role
                        </label>
                        <select name="" className="w-3/5" defaultValue={0} id="roleId" onChange={(e) => setRoleId(e.target.value)} value={roleId}>
                            <option value="0">Please select</option>
                            {roles.map((role) => (
                                <option key={role.RoleId} value={role.RoleId}>
                                    {role.RoleLevel}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className='flex gap-8 h-24 justify-center items-center'>
                        <button className='h-3/5 p-3 bg-red-200 rounded-xl hover:bg-red-100' onClick={cancel}>Cancel</button>
                        <button className='h-3/5 p-3 bg-green-200 rounded-xl hover:bg-green-100' type="submit">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}