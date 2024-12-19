import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useNavigate } from "react-router";

const UseProfile = ({ user }) => (
	<div className="bg-gray-800 rounded-lg p-4 mb-4 flex flex-col items-center gap-8 rounded-[50px]">
		<div className="flex flex-col items-center relative">
			<div className="w-32 h-32 bg-orange-500 rounded-full mb-2 absolute top-[-50%]"></div>
			<h2 className="text-xl font-bold mt-[80px]">{user.name}</h2>
			<p className="text-sm text-gray-400">Last visited: {user.lastVisit}</p>
		</div>

		<table className="table-auto mx-4">
			<tbody>
				<tr>
					<td className="font-semibold">Contact</td>
					<td className="pl-4 pb-2 text-orange-300">{user.contact}</td>
				</tr>
				<tr>
					<td className="font-semibold">Whatsapp</td>
					<td className="pl-4 pb-2 text-orange-300">{user.whatsapp}</td>
				</tr>
				<tr>
					<td className="font-semibold">Email</td>
					<td className="pl-4 pb-2 text-orange-300">{user.email}</td>
				</tr>
			</tbody>
		</table>
	</div>
);

const StatsCard = ({ title, value, description }) => (
	<div className="bg-white text-black rounded-lg p-4 flex-1">
		<h3 className="text-lg font-bold">{title} ⭐</h3>
		<p className="text-2xl font-bold">{value}</p>
		<p className="text-sm">{description}</p>
	</div>
);

const BookingRow = ({ booking, onRatingSubmit }) => {
	const [isRating, setIsRating] = useState(false);
	const [rating, setRating] = useState(0);
	const [submitted, setSubmitted] = useState(false);

	const handleRatingClick = (rate) => {
		setRating(rate);
	};

	const handleSubmit = () => {
		setSubmitted(true);
		setIsRating(false);
		onRatingSubmit(booking, rating);
	};

	return (
		<tr className="border-b border-gray-700">
			<td className="py-4 px-8">{booking.service}</td>
			<td className="py-4 px-8">{booking.plan}</td>
			<td className="py-4 px-8">{booking.date}</td>
			<td className="py-4 px-8">{booking.status}</td>
			<td className="py-4 px-8">
				{booking.status === "Completed" && !submitted && (
					<>
						{isRating ? (
							<div className="flex items-center">
								{[1, 2, 3, 4, 5].map((rate) => (
									<span
										key={rate}
										className={`text-2xl cursor-pointer ${
											rating >= rate ? "text-yellow-500" : "text-gray-500"
										}`}
										onClick={() => handleRatingClick(rate)}
									>
										★
									</span>
								))}
								<button
									className="bg-green-500 text-white px-3 py-1 rounded ml-4"
									onClick={handleSubmit}
								>
									Submit
								</button>
							</div>
						) : (
							<button
								className="bg-orange-500 text-white px-3 py-1 rounded"
								onClick={() => setIsRating(true)}
							>
								Give feedback
							</button>
						)}
					</>
				)}
				{submitted && (
					<div className="flex items-center">
						<span className="text-green-500 mr-2"></span>
						<div className="flex">
							{[...Array(rating)].map((_, index) => (
								<span key={index} className="text-yellow-500 text-2xl">
									★
								</span>
							))}
						</div>
					</div>
				)}
			</td>
		</tr>
	);
};
const Dashboard = ({ user, bookings: initialBookings }) => {
	const [bookings, setBookings] = useState(initialBookings);
	const [sortConfig, setSortConfig] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const sortBookings = (key) => {
		let direction = "ascending";
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === "ascending"
		) {
			direction = "descending";
		}
		const sortedBookings = [...bookings].sort((a, b) => {
			if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
			if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
			return 0;
		});
		setBookings(sortedBookings);
		setSortConfig({ key, direction });
	};

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const navigate = useNavigate();

	const handleRatingSubmit = (booking, rating) => {
		const updatedBookings = bookings.map((b) =>
			b === booking ? { ...b, rating } : b
		);
		setBookings(updatedBookings);
	};

	return (
		<div className="bg-black text-white font-sans p-6 flex flex-col items-center mt-[60px]">
			<div className="flex gap-8">
				<UseProfile user={user} />

				<header className="mb-6">
					<h1 className="text-3xl font-bold text-orange-300">
						Hello {user.name}!
					</h1>
					<p className="text-gray-400 text-2xl mt-1">
						We hope you are having a great time with Kreatify!
					</p>
					<div className="flex justify-between mb-6 gap-4 mt-6">
						<StatsCard
							title="Services booked"
							value={21}
							description="Our partnership has been incredible!"
						/>
						<StatsCard
							title="Success rate"
							value="97%"
							description="We're committed to improving for even better results."
						/>
					</div>

					<Button
						color="orange"
						className=" px-4 py-2 rounded-xl font-regular "
						onClick={() => navigate("/contact")}
					>
						Contact our team for personalized improvement
					</Button>
					<Button
						variant="outline"
						color="orange"
						className=" px-4 py-2 rounded-xl mr-2 mt-3"
						onClick={handleOpenModal}
					>
						Know more about our stars
					</Button>
				</header>
			</div>

			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
				<table className="w-full">
					<thead>
						<tr className="border-b border-gray-700">
							{["Service", "Plan", "Date", "Payment", "Feedback form"].map(
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
						{bookings.map((booking, index) => (
							<BookingRow
								key={index}
								booking={booking}
								onRatingSubmit={handleRatingSubmit}
							/>
						))}
					</tbody>
				</table>
			</div>
			<Modal show={showModal} handleClose={handleCloseModal}>
				<h2 className="text-2xl font-bold mb-4">Star Information</h2>
				<div className="flex flex-col gap-4">
					<div className="table-auto mx-4 bg-white p-8 rounded-[20px]">
						<p className="text-2xl text-black font-semibold mb-[20px]">
							Services:
						</p>
						<table className="w-full mb-8">
							<tbody>
								<tr>
									<td className="font-semibold text-black">
										Less than equal to 3:
									</td>
									<td className="pl-4 pb-2 text-black flex items-center">
										<span className="text-red-500 text-2xl">★</span>{" "}
										<span className="ml-2">
											"We are excited to build a strong partnership"
										</span>
										{/* Red star */}
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-black">
										Less than equal to 10:
									</td>
									<td className="pl-4 pb-2 text-black flex items-center">
										<span className="text-orange-500 text-2xl">★</span>{" "}
										<span className="ml-2">
											"Your continued collaboration inspires us"
										</span>
										{/* Orange star */}
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-black">More than 10:</td>
									<td className="pl-4 pb-2 text-black flex items-center">
										<span className="text-yellow-500 text-2xl">★</span>{" "}
										<span className="ml-2">
											"Our partnership has been incredible"
										</span>
										{/* Yellow star */}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="table-auto mx-4 bg-white p-8 rounded-[20px]">
						<p className="text-2xl text-black font-semibold mb-[20px]">
							Feedback:
						</p>
						<tbody>
							<tr>
								<td className="font-semibold text-black">Above 90%:</td>
								<td className="pl-4 pb-2 text-black">
									<span className="text-red-500 text-2xl">★</span> "We are
									thrilled to see your success"
								</td>
							</tr>
							<tr>
								<td className="font-semibold text-black">60-89%:</td>
								<td className="pl-4 pb-2 text-black">
									<span className="text-orange-500 text-2xl">★</span> "We're
									committed to improving for even better results."
								</td>
							</tr>
							<tr>
								<td className="font-semibold text-black">less than 60%:</td>
								<td className="pl-4 pb-2 text-black">
									<span className="text-yellow-500 text-2xl">★</span> "We will
									strive to serve you better."
								</td>
							</tr>
						</tbody>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Dashboard;
