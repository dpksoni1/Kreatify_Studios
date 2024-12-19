import React, { useState, useEffect } from "react";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isService, setIsService] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const services = [
		{
			name: "Production",
			description: "Includes photography, videography and more...",
		},
		{
			name: "Graphic Designing",
			description: "Includes logo design, poster design and more...",
		},
		{
			name: "Digital Presence",
			description: "Includes web development, management and more...",
		},

		{
			name: "Social Media Management",
			description: "Regular posts sharing and marketing and more...",
		},
	];

	// Check if user is authenticated
	const isAuthenticated = !!localStorage.getItem("authToken");

	return (
		<>
			<nav className="navbarbg fixed top-0 left-0 right-0 text-white px-6 py-4 flex justify-between items-center z-[50]">
				<Link to="/">
					<img
						src="logo.png"
						className="object-cover w-[180px] h-[60px]"
						alt="Logo"
					/>
				</Link>

				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>

				<ul className="relative hidden lg:flex lg:space-x-6">
					<li className="flex items-center">
						<NavLink to="/" className="hover:text-gray-400">
							Home
						</NavLink>
					</li>
					<li className="flex items-center">
						<NavLink to="/about" className="hover:text-gray-400">
							About
						</NavLink>
					</li>
					<li
						className="services-expander flex items-center"
						onMouseEnter={() => setIsService(true)}
						onMouseLeave={() => setIsService(false)}
					>
						<p className="hover:text-gray-400">
							<button className="hover:text-gray-300">Services ▼</button>
							{isService && (
								<div className="fixed right-0 mt-2 w-full bg-gray-900 shadow-lg z-10">
									<div className="grid grid-cols-2 gap-4 p-4 max-w-[1000px] mx-auto">
										{services.map((service, index) => (
											<Link to={`/service?service=${service.name}`} key={index}>
												<div className="text-left items-center p-[30px]">
													<h3 className="text-red-500 font-semibold">
														{service.name}
													</h3>
													<p className="text-gray-400 text-sm">
														{service.description}
													</p>
												</div>
											</Link>
										))}
									</div>
								</div>
							)}
						</p>
					</li>
					<li className="flex items-center">
						<NavLink to="/portfolio" className="hover:text-gray-400">
							Portfolio
						</NavLink>
					</li>

					<li>
						<NavLink to="/contact">
							<Button variant="outline" color="orange">
								Get Quote
							</Button>
						</NavLink>
					</li>
				</ul>

				{/* Full-page menu overlay */}
				{isOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
						<button
							onClick={toggleMenu}
							className="absolute top-4 right-4 text-white focus:outline-none"
						>
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
						<ul className="space-y-6 text-center text-2xl">
							<li>
								<NavLink
									to="/"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/service"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/portfolio"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Portfolio
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/portfolio"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									<Button variant="outline" color="orange">
										Get a Quote
									</Button>
								</NavLink>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
