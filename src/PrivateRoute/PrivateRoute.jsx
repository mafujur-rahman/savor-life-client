import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="w-full text-center">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/log-in"></Navigate>;
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}
export default PrivateRoute;