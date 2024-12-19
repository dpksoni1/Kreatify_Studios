import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: "",
		email_id: "", // Corrected field name
		phone_number: "", // Corrected field name
		whatsapp_number: "", // Corrected field name
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		let formErrors = {};

		if (!formData.name.trim()) {
			formErrors.name = "Name is required.";
		}

		if (!formData.email_id.trim()) {
			formErrors.email_id = "Email is required.";
		} else if (!/\S+@\S+\.\S+/.test(formData.email_id)) {
			formErrors.email_id = "Email is invalid.";
		}

		if (!formData.phone_number.trim()) {
			formErrors.phone_number = "Contact number is required.";
		} else if (!/^\d+$/.test(formData.phone_number)) {
			formErrors.phone_number = "Contact number is invalid.";
		}

		if (!formData.whatsapp_number.trim()) {
			formErrors.whatsapp_number = "Whatsapp number is required.";
		} else if (!/^\d+$/.test(formData.whatsapp_number)) {
			formErrors.whatsapp_number = "Whatsapp number is invalid.";
		}

		setErrors(formErrors);

		return Object.keys(formErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			console.log("Form validation failed.");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/register",
				formData
			);
			console.log("Response:", response.data);
			// Handle successful response
		} catch (error) {
			console.error("Error submitting form:", error);
			// Handle error response
		}
	};

	return (
		<AuthLayout>
			<form
				className="h-full py-10 pl-8 pr-16 space-y-8"
				onSubmit={handleSubmit}
			>
				<div>
					<InputField
						placeholder="Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
					{errors.name && <p className="text-red-500">{errors.name}</p>}
				</div>

				<div>
					<InputField
						placeholder="Email ID"
						name="email_id"
						value={formData.email_id}
						onChange={handleChange}
					/>
					{errors.email_id && <p className="text-red-500">{errors.email_id}</p>}
				</div>

				<div>
					<InputField
						placeholder="Contact number"
						type="number"
						name="phone_number"
						value={formData.phone_number}
						onChange={handleChange}
					/>
					{errors.phone_number && (
						<p className="text-red-500">{errors.phone_number}</p>
					)}
				</div>

				<div>
					<InputField
						placeholder="Whatsapp number"
						type="number"
						name="whatsapp_number"
						value={formData.whatsapp_number}
						onChange={handleChange}
					/>
					{errors.whatsapp_number && (
						<p className="text-red-500">{errors.whatsapp_number}</p>
					)}
				</div>

				<div className="flex-1 flex-col flex items-center justify-center">
					<Button
						variant="filled"
						color="orange"
						size="large"
						className="px-36 my-6"
						type="submit"
					>
						Sign Up
					</Button>
					<p className="text-yellow-500 text-lg">
						Already have an account?{" "}
						<Link to="/signin">
							<span className="underline cursor-pointer text-lg">Login</span>
						</Link>
					</p>
				</div>
			</form>
		</AuthLayout>
	);
};

export default SignUp;
