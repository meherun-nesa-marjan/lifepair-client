import { useContext } from "react";
import UseAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="text-center my-40">

        <span className="text-2xl">Loading...............</span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return (
    <div>
      <Navigate state={{ from: location }} to="/" replace></Navigate>
    </div>
  );
};

export default AdminRoutes;