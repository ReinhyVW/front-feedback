import NavBar from "../../shared/components/NavBar.jsx";
import requireAuth from "../../shared/domain/requireAuth.jsx";

import useViewSetter from "../domain/useViewSetter.jsx";

import AdminMenu from "../components/AdminMenu.jsx";

function Admin() {
  const { view, render, handleView, toggleStatus } = useViewSetter()

  return (
    <>
      <NavBar />
      <div className="absolute right-0 h-full flex flex-col items-center justify-evenly w-full xl:w-10/12 overflow-hidden">
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