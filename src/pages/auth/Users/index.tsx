import React from "react";
import { Outlet } from "react-router-dom";


interface UsersLandingProps {}

const UsersLanding: React.FC<UsersLandingProps> = () => {
  return (
    <Outlet />
  );
};
export default UsersLanding;
