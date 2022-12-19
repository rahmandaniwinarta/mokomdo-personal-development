import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export const LayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
