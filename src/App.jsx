import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Service from "./pages/Service";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import  PortfolioShowcase from "./pages/PortfolioShowcase";
export default function App() {
	const dummyUser = {
		name: "John Doe",
		lastVisit: "2days ago",
		contact: "1234567890",
		whatsapp: "1234567890",
		email: "johndoe@gmail.com",
	};

	const dummyBookings = [
		{
			service: "Production",
			plan: "Pro Studio",
			date: "23 July 2024",
			status: "Completed",
			feedback: "⭐⭐⭐⭐⭐",
		},
		{
			service: "Production",
			plan: "Pro Studio",
			date: "23 July 2024",
			status: "In Transit",
			feedback: null,
		},
		{
			service: "Production",
			plan: "Pro Studio",
			date: "23 July 2024",
			status: "Failed",
			feedback: null,
		},
		{
			service: "Production",
			plan: "Pro Studio",
			date: "23 July 2024",
			status: "Completed",
			feedback: "⭐⭐⭐⭐⭐",
		},
		{
			service: "Production",
			plan: "Pro Studio",
			date: "23 July 2024",
			status: "Completed",
			feedback: "⭐⭐⭐⭐⭐",
		},
	];
	return (
		<div className="w-full  bg-black pt-[80px]">
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/service" element={<Service />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/portfolio/:category" element={<PortfolioShowcase />} />
				<Route
					path="/profile"
					element={
						<ProtectedRoute
							element={<Dashboard user={dummyUser} bookings={dummyBookings} />}
						/>
					}
				/>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/dashboard" element={<AdminDashboard />} />
			</Routes>
		</div>
	);
}
