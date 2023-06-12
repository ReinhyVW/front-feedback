import images from "../../shared/images/images";

import { createCenter, editCenter, deleteCenter } from "../domain/handlersCenter";
import { createUser, editUser, deleteUser } from "../domain/HandlersUser"

export default function AdminMenu({ view, handler, image }) {
    function showAddForm() {
        if (view === 'Center') {
            document.getElementById(`CenterForm`).style.display = 'flex';
            document.getElementById(`CenterFormAction`).addEventListener('submit', createCenter);
        } else if (view === 'User') {
            document.getElementById(`UserForm`).style.display = 'flex';
            document.getElementById(`UserFormAction`).addEventListener('submit', createUser);
        }

    }

    function showEditForm() {
        if (view === 'Center') {
            document.getElementById(`CenterForm`).style.display = 'flex'
            document.getElementById(`facilityName`).value = localStorage.getItem('facilityName')
            document.getElementById(`locationAddress`).value = localStorage.getItem('locationAddress')
            document.getElementById(`contactPhone`).value = localStorage.getItem('contactPhone')
            document.getElementById(`contactName`).value = localStorage.getItem('contactName')
            document.getElementById(`CenterFormAction`).addEventListener('submit', editCenter)
        } else if (view === 'User') {
            document.getElementById(`UserForm`).style.display = 'flex'
            document.getElementById(`username`).value = localStorage.getItem('username')
            document.getElementById(`memberName`).value = localStorage.getItem('memberName')
            document.getElementById(`memberLName`).value = localStorage.getItem('memberLName')
            document.getElementById(`centerId`).value = localStorage.getItem('centerId')
            document.getElementById(`roleId`).value = localStorage.getItem('roleId')

            document.getElementById(`UserFormAction`).addEventListener('submit', editUser)
        }
    }

    function showDeleteForm() {
        document.getElementById(`DeleteForm`).style.display = 'flex';
        view === 'Center' ?
            document.getElementById(`DeleteButton`).addEventListener('click', deleteCenter)
            : document.getElementById(`DeleteButton`).addEventListener('click', deleteUser);
    }

    return (
        <div className="h-full w-full flex bg-sky-700 rounded-2xl justify-between">
            <div className="h-full flex items-center justify-center w-3/12">
                <h1 className="text-3xl text-sky-100">Admin Menu</h1>
            </div>

            <div className="flex w-6/12 h-full justify-evenly items-center text-sky-50">
                <button className="flex flex-col h-full justify-evenly items-center" onClick={showAddForm}>
                    <img src={images.add} alt="" className="h-2/6" />
                    <h3 className="text-xl">Create</h3>
                </button>
                <button className="flex flex-col h-full justify-evenly items-center">
                    <img src={images.edit} alt="" className="h-2/6" onClick={showEditForm} />
                    <h3 className="text-xl">Edit</h3>
                </button>
                <button className="flex flex-col h-full justify-evenly items-center" onClick={showDeleteForm}>
                    <img src={images.deleteIcon} alt="" className="h-2/6" />
                    <h3 className="text-xl">Delete</h3>
                </button>
                <button className="flex flex-col h-full justify-evenly items-center" onClick={handler}>
                    <img src={image} alt="" className="h-2/6" />
                    <h3 className="text-xl">{view}</h3>
                </button>
            </div>
        </div>
    );
}