import React, { useState, useEffect } from "react";

// Dummy data for testing
const dummyServices = [
	{
		_id: "1",
		name: "Service 1",
		tagline: "Best Service 1",
		features: ["Feature 1.1", "Feature 1.2"],
		plans: ["Plan 1.1", "Plan 1.2"],
	},
	{
		_id: "2",
		name: "Service 2",
		tagline: "Best Service 2",
		features: ["Feature 2.1", "Feature 2.2"],
		plans: ["Plan 2.1", "Plan 2.2"],
	},
];

const dummyUsers = [
	{
		_id: "1",
		name: "User 1",
		email_id: "user1@example.com",
		phone_number: "1234567890",
		whatsapp_number: "1234567890",
	},
	{
		_id: "2",
		name: "User 2",
		email_id: "user2@example.com",
		phone_number: "0987654321",
		whatsapp_number: "0987654321",
	},
];

const AdminDashboard = () => {
	// State variables for managing services and users
	const [services, setServices] = useState(dummyServices);
	const [users, setUsers] = useState(dummyUsers);
	const [serviceForm, setServiceForm] = useState({
		name: "",
		tagline: "",
		features: "",
		plans: "",
	});
	const [userForm, setUserForm] = useState({
		name: "",
		email_id: "",
		phone_number: "",
		whatsapp_number: "",
	});
	const [editServiceId, setEditServiceId] = useState(null);
	const [editUserId, setEditUserId] = useState(null);
	const [sortConfig, setSortConfig] = useState(null);

	// Handle form input changes
	const handleServiceChange = (e) => {
		const { name, value } = e.target;
		setServiceForm((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleUserChange = (e) => {
		const { name, value } = e.target;
		setUserForm((prevState) => ({ ...prevState, [name]: value }));
	};

	// Handle service form submission
	const handleServiceSubmit = (e) => {
		e.preventDefault();
		if (editServiceId) {
			// Update service
			setServices((prevServices) =>
				prevServices.map((service) =>
					service._id === editServiceId
						? {
								...service,
								...serviceForm,
								features: serviceForm.features.split(","),
								plans: serviceForm.plans.split(","),
						  }
						: service
				)
			);
		} else {
			// Create service
			const newService = {
				...serviceForm,
				_id: Date.now().toString(),
				features: serviceForm.features.split(","),
				plans: serviceForm.plans.split(","),
			};
			setServices((prevServices) => [...prevServices, newService]);
		}
		setServiceForm({ name: "", tagline: "", features: "", plans: "" });
		setEditServiceId(null);
	};

	// Handle user form submission
	const handleUserSubmit = (e) => {
		e.preventDefault();
		if (editUserId) {
			// Update user
			setUsers((prevUsers) =>
				prevUsers.map((user) =>
					user._id === editUserId ? { ...user, ...userForm } : user
				)
			);
		} else {
			// Create user
			const newUser = { ...userForm, _id: Date.now().toString() };
			setUsers((prevUsers) => [...prevUsers, newUser]);
		}
		setUserForm({
			name: "",
			email_id: "",
			phone_number: "",
			whatsapp_number: "",
		});
		setEditUserId(null);
	};

	// Handle editing a service
	const handleEditService = (service) => {
		setServiceForm({
			name: service.name,
			tagline: service.tagline,
			features: service.features.join(","),
			plans: service.plans.join(","),
		});
		setEditServiceId(service._id);
	};

	// Handle editing a user
	const handleEditUser = (user) => {
		setUserForm({
			name: user.name,
			email_id: user.email_id,
			phone_number: user.phone_number,
			whatsapp_number: user.whatsapp_number,
		});
		setEditUserId(user._id);
	};

	// Handle deleting a service
	const handleDeleteService = (id) => {
		setServices((prevServices) =>
			prevServices.filter((service) => service._id !== id)
		);
	};

	// Handle deleting a user
	const handleDeleteUser = (id) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
	};

	// Sorting logic
	const sortBookings = (key) => {
		let direction = "ascending";
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			direction = "descending";
		}
		setSortConfig({ key, direction });

		const sortedData = [...services].sort((a, b) => {
			if (a[key] < b[key]) {
				return direction === "ascending" ? -1 : 1;
			}
			if (a[key] > b[key]) {
				return direction === "ascending" ? 1 : -1;
			}
			return 0;
		});
		setServices(sortedData);
	};

	return (
		<div className="p-8 text-white">
			<h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

			<section className="mb-12">
				<h2 className="text-xl font-semibold mb-4">Services</h2>
				<form onSubmit={handleServiceSubmit} className="mb-6">
					<input
						type="text"
						name="name"
						value={serviceForm.name}
						onChange={handleServiceChange}
						placeholder="Name"
						required
						className="border p-2 mr-2"
					/>
					<input
						type="text"
						name="tagline"
						value={serviceForm.tagline}
						onChange={handleServiceChange}
						placeholder="Tagline"
						required
						className="border p-2 mr-2"
					/>
					<input
						type="text"
						name="features"
						value={serviceForm.features}
						onChange={handleServiceChange}
						placeholder="Features (comma separated)"
						required
						className="border p-2 mr-2"
					/>
					<input
						type="text"
						name="plans"
						value={serviceForm.plans}
						onChange={handleServiceChange}
						placeholder="Plans (comma separated)"
						required
						className="border p-2 mr-2"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded"
					>
						{editServiceId ? "Update" : "Create"} Service
					</button>
				</form>
				<table className="w-full border-collapse">
					<thead>
						<tr className="border-b border-gray-700">
							{["Name", "Tagline", "Features", "Plans", "Actions"].map(
								(header) => (
									<th
										key={header}
										className="py-2 text-left cursor-pointer px-8"
										onClick={() => sortBookings(header.toLowerCase())}
									>
										{header}{" "}
										{sortConfig && sortConfig.key === header.toLowerCase()
											? sortConfig.direction === "ascending"
												? "▲"
												: "▼"
											: ""}
									</th>
								)
							)}
						</tr>
					</thead>
					<tbody>
						{services.map((service) => (
							<tr key={service._id}>
								<td className="py-2 px-8 border-b border-gray-700">
									{service.name}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									{service.tagline}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									{service.features.join(", ")}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									{service.plans.join(", ")}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									<button
										onClick={() => handleEditService(service)}
										className="bg-green-500 text-white py-1 px-2 mr-2 rounded"
									>
										Edit
									</button>
									<button
										onClick={() => handleDeleteService(service._id)}
										className="bg-red-500 text-white py-1 px-2 rounded"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<section>
				<h2 className="text-xl font-semibold mb-4">Users</h2>
				<form onSubmit={handleUserSubmit} className="mb-6">
					<input
						type="text"
						name="name"
						value={userForm.name}
						onChange={handleUserChange}
						placeholder="Name"
						required
						className="border p-2 mr-2"
					/>
					<input
						type="email"
						name="email_id"
						value={userForm.email_id}
						onChange={handleUserChange}
						placeholder="Email"
						required
						className="border p-2 mr-2"
					/>
					<input
						type="text"
						name="phone_number"
						value={userForm.phone_number}
						onChange={handleUserChange}
						placeholder="Phone Number"
						required
						className="border p-2 mr-2"
					/>
					<input
						type="text"
						name="whatsapp_number"
						value={userForm.whatsapp_number}
						onChange={handleUserChange}
						placeholder="Whatsapp Number"
						required
						className="border p-2 mr-2"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded"
					>
						{editUserId ? "Update" : "Create"} User
					</button>
				</form>
				<table className="w-full border-collapse">
					<thead>
						<tr className="border-b border-gray-700">
							{[
								"Name",
								"Email",
								"Phone Number",
								"Whatsapp Number",
								"Actions",
							].map((header) => (
								<th
									key={header}
									className="py-2 text-left cursor-pointer px-8"
									onClick={() => sortBookings(header.toLowerCase())}
								>
									{header}{" "}
									{sortConfig && sortConfig.key === header.toLowerCase()
										? sortConfig.direction === "ascending"
											? "▲"
											: "▼"
										: ""}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td className="py-2 px-8 border-b border-gray-700">
									{user.name}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									{user.email_id}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									{user.phone_number}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									{user.whatsapp_number}
								</td>
								<td className="py-2 px-8 border-b border-gray-700">
									<button
										onClick={() => handleEditUser(user)}
										className="bg-green-500 text-white py-1 px-2 mr-2 rounded"
									>
										Edit
									</button>
									<button
										onClick={() => handleDeleteUser(user._id)}
										className="bg-red-500 text-white py-1 px-2 rounded"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	);
};

export default AdminDashboard;
