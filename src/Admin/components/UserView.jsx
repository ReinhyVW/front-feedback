import UserTable from "./UserTable.jsx"
import UserForm from "./UserForm.jsx"
import DeleteForm from "./DeleteForm.jsx"

export default function UserView() {
    return (
        <>
            <UserTable />
            <UserForm />
            <DeleteForm />
        </>
    )
}