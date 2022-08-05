import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Layouts from "../pages/Layouts";
import Splash from "../pages/Auth/Splash";
import Home from "../pages/Auth/Home";

const RequireAuth = () => {
  const token = useSelector((state) => state.auth.token)
  let location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layouts />}>

          {/* Without token */}
          <Route path="/" element={<Home />} />

          <Route element={<RequireAuth />}>
            {/* With token */}
            <Route path="/new" element={<Home />} />
          </Route>

        </Route>

      </Routes>
    </HashRouter>
  );
}

export default Routers