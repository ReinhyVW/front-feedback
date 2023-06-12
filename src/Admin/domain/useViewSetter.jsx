import { useState, useEffect } from "react";
import CenterView from "../components/CenterView";
import UserView from "../components/UserView";
import images from "../../shared/images/images";

export default function useViewSetter() {
  const [view, setView] = useState("Center");
  const [render, setRender] = useState(null);

  const image =  images.toggle
  const imageActive = images.toggled

  const [toggleStatus, setToggleStatus] = useState(image)


  const handleView = () => {
    if (view === "User") {
      setView("Center");
      setToggleStatus(imageActive);
    } else {
      setView("User");
      setToggleStatus(image);
    }
  };

  useEffect(() => {
    handleView();
  }, []);

  useEffect(() => {
    if (view === "Center") {
      setRender(<CenterView />);
    } else {
      setRender(<UserView />);
    }
  }, [view]); // Render the appropriate component based on the updated view state

  return { view, render, handleView, toggleStatus };
}
