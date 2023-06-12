import UserTable from "./UserTable"
import UserForm from "./UserForm"
import DeleteForm from "./DeleteForm"

export default function UserView() {
    return (
        <>
            <UserTable />
            <UserForm />
            <DeleteForm />
        </>
    )
}