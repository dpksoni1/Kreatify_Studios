import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const validate = () => {
		const errors = {};
		if (!formData.name) errors.name = "Name is required.";
		if (!formData.email) {
			errors.email = "Email is required.";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Email is invalid.";
		}
		if (!formData.message) errors.message = "Message is required.";
		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setResponseMessage("");
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:5000/api/user/contact/send",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setResponseMessage(response.data.message);
			setErrors({});
			console.log(response);
		} catch (error) {
			setResponseMessage("An error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full min-h-screen bg-white pt-16">
			<div className="w-full max-w-[1000px] mx-auto flex gap-8 px-16 items-center">
				<div className="bg-black flex max-h-[100px] w-[260px] rounded-lg">
					<img src="logo.png" alt="" className="object-cover w-full" />
				</div>

				<div className="">
					<h1 className="text-3xl font-bold mb-1">Hello.</h1>
					<h2 className="text-2xl font-semibold mb-2">
						Let’s get to know you more!
					</h2>
				</div>
			</div>
			<div className="flex max-w-[1000px] mx-auto">
				<div className="flex-1 flex justify-center px-8">
					<div className="p-8">
						<p className="mb-16 text-black text-lg">
							We’re just a click away from transforming your brand from great to
							incredible. Fill out the form to provide details about your
							project—or even your favorite sweet dish. Either way, we’d be
							thrilled to hear from you!
						</p>
						<div className="">
							<p className="text-2xl font-semibold text-orange-500">
								Not Sure where to begin?
								<br /> No worries!
							</p>
							<i className="text-orange-400">
								Hi, I am Aashish! I am eager to hear your incredible ideas and
								help you select the perfect service.
							</i>
						</div>
					</div>
				</div>

				<div className="flex-1 flex justify-center items-center">
					<form
						className="space-y-4 p-8 w-[500px] shadow-2xl rounded-2xl"
						onSubmit={handleSubmit}
					>
						<InputField
							variant="black"
							placeholder="Name"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>
						{errors.name && (
							<p className="text-red-500 text-sm">{errors.name}</p>
						)}
						<InputField
							variant="black"
							type="email"
							placeholder="Email ID"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">{errors.email}</p>
						)}
						<textarea
							placeholder="Type your message here"
							name="message"
							value={formData.message}
							onChange={handleChange}
							id="message"
							className="mt-1 block w-full px-6 py-2 shadow-sm focus:outline-none sm:text-sm placeholder:text-[16px] placeholder:text-[#4e4e4e] border-b-black border-b border-b-solid"
							rows="4"
						></textarea>
						{errors.message && (
							<p className="text-red-500 text-sm">{errors.message}</p>
						)}

						<div>
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
								disabled={loading}
							>
								{loading ? "Sending..." : "Send"}
							</button>
						</div>
						{responseMessage && (
							<p className="mt-4 text-center text-lg text-gray-700">
								{responseMessage}
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}
