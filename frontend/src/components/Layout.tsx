import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "./DashboardNavbar";

export const Layout = () => {
  return (
    <div>
      <DashboardNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
