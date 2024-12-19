// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...props }) => {
	const token = localStorage.getItem("authToken"); // or use another method to get the token

	return !token ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
