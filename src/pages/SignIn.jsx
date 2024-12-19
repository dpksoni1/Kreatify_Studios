import React, { useEffect, useState } from "react";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import OtpInput from "../components/OtpInput";
import axios from "axios";
import { redirect, useNavigate } from "react-router";

const SignIn = () => {
	const [otpSent, setOtpSent] = useState(false);
	const [timer, setTimer] = useState(35);
	const [otp, setOtp] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	useEffect(() => {
		let interval;
		if (otpSent && timer > 0) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		}

		if (timer === 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [otpSent, timer]);

	const sendOTP = async () => {
		try {
			setLoading(true);
			const response = await axios.post(
				"http://localhost:5000/api/auth/initiate-login",
				{ email_id: email }
			);
			console.log("Response:", response.data);
			// Handle successful response
			setOtpSent(true);
			setTimer(35);
			setLoading(false);
		} catch (error) {
			console.error("Error submitting form:", error);
			setError("Failed to send OTP. Please try again.");
			setLoading(false);
		}
	};
	const verifyOTP = async () => {
		try {
			setLoading(true);
			console.log({ email_id: email, sent_otp: otp });
			const response = await axios.post(
				"http://localhost:5000/api/auth/verify-login",
				{
					email_id: email,
					sent_otp: otp, // Convert OTP to a number
				}
			);
			console.log("Response:", response.data);
			// Handle successful verification
			// Redirect or update UI accordingly
			const token = "your_token"; // Replace with actual token
			localStorage.setItem("authToken", token);
			navigate("/profile");

			setLoading(false);
		} catch (error) {
			console.error("Error verifying OTP:", error);
			setError("Invalid OTP. Please try again.");
			setLoading(false);
		}
	};

	const handleGetOtp = (e) => {
		e.preventDefault();
		sendOTP();
	};

	const handleOtpSubmit = (otp) => {
		setOtp(otp);
		// Automatically verify OTP when complete
		if (otp.length === 6) {
			verifyOTP();
		}
	};

	return (
		<AuthLayout>
			<p className="text-yellow-500 text-lg text-center">
				Already have an account?{" "}
				<span className="underline cursor-pointer text-lg">Login</span>
			</p>
			<form className="h-full py-10 pl-8 pr-16 space-y-8">
				<InputField
					type="email"
					placeholder="Email ID"
					name="Email ID"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				{error && <p className="text-red-500 text-center">{error}</p>}
				{!otpSent ? (
					<Button
						variant="filled"
						color="orange"
						size="large"
						className="px-36 my-6"
						onClick={handleGetOtp}
						disabled={loading}
					>
						{loading ? "Sending OTP..." : "Get OTP"}
					</Button>
				) : (
					<>
						<div className="mx-6 mb-8 mt-10">
							<h4 className="text-gray-200">Enter OTP</h4>
							<p className="text-gray-400">
								Enter the OTP sent to your registered email address
							</p>
						</div>
						<OtpInput length={6} onOtpSubmit={handleOtpSubmit} />
						<div className="m-5">
							<p className="text-gray-400">
								<span
									className="underline text-gray-200 cursor-pointer"
									onClick={sendOTP}
								>
									Resend OTP
								</span>{" "}
								in{" "}
								<span className="text-orange-500">{`00:${
									timer < 10 ? `0${timer}` : timer
								} seconds`}</span>
							</p>
						</div>
						<div className="flex-1 flex-col flex items-center justify-center">
							<Button
								variant="filled"
								color="orange"
								size="large"
								className="px-36 my-6"
								onClick={verifyOTP}
								disabled={loading || otp.length !== 6}
							>
								{loading ? "Verifying..." : "Sign In"}
							</Button>
						</div>
					</>
				)}
			</form>
		</AuthLayout>
	);
};

export default SignIn;
