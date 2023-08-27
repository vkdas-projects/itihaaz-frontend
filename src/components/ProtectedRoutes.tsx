import { useEffect } from "react";
import { useAuthStore } from "../zustand/auth";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { data } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (data === null) {
      navigate("/admin");
    }
  }, [data]);

  let Element;
  if (data) Element = <Outlet />;
  return Element;
};

export default ProtectedRoutes;
