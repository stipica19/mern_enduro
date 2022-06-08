import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  //get item from localstorage

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const _user = localStorage.getItem("userInfo");

  if (_user || userInfo) {
    return {
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
};

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
