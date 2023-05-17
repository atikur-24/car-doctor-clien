import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return (
            <div className="flex justify-center items-center">
              <progress className="progress w-56 text-center"></progress>
            </div>
          )
    }

    else if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;