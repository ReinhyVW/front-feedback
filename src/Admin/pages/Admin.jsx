import NavBar from "../../shared/components/NavBar";
import requireAuth from "../../shared/domain/requireAuth";

import useViewSetter from "../domain/useViewSetter";

import AdminMenu from "../components/AdminMenu";

function Admin() {
  const { view, render, handleView, toggleStatus } = useViewSetter()

  return (
    <>
      <NavBar />
      <div className="absolute right-0 w-10/12 h-full flex flex-col items-center justify-evenly overflow-hidden">
        <div className="h-24 w-10/12">
          <AdminMenu view={view} handler={handleView} image={toggleStatus} />
        </div>
        <div className="h-5/6 w-full flex flex-col items-center justify-center">
          {render}
        </div>

      </div>
    </>
  );
}

export default requireAuth(Admin)