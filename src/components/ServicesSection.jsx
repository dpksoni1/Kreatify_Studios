import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ServicesSection({ data }) {
	return (
		<div
			className={`w-full h-screen flex justify-center items-center ${
				data.color == "white" ? "bg-white text-black" : "bg-black text-white"
			}`}
		>
			<div
				className={` w-full max-w-[1000px] flex gap-[20px]  ${
					data.direction == "right" ? "flex-row-reverse " : "flex-row "
				}`}
			>
				<div className="  flex-1 flex items-center">
					<div
						className={`border  p-2 ${
							data.color == "white" ? "border-black" : "border-white"
						}`}
					>
						<img
							src={data.img1}
							className="object-cover  w-[400px] h-[400px]  shadow-2xl "
						/>
					</div>
				</div>
				<div className="flex flex-col gap-[20px] relative top-[-10px]  ">
					<div className="relative text-4xl font-semibold text-right top-[-60px]">
						{data.title}
					</div>
					<div
						className={`items-center flex gap-[30px] relative ${
							data.direction == "right" ? "right-[-70px]" : "left-[-70px]"
						} `}
					>
						<div className="text-2xl font-semibold text-center max-w-[200px]">
							{data.description}
						</div>
						<div className="border border-black p-2">
							<img
								src={data.img2}
								className="object-cover  w-[200px] h-[200px] bg-orange-400 shadow-2xl "
							/>
						</div>
					</div>
					<div className="flex flex-col items-end gap-[10px]">
						<Link to={`/portfolio/${data.title}`}>
							<p className="font-semibold text-3xl text-orange-400">
								View more {"->"}
							</p>
						</Link>

						<Link to="/contact">
							<Button variant="outline" color="orange">
								Book Now
							</Button>
						</Link>
					</div>
				</div>
			</div>
			{/* <div
				className={`w-full max-w-[1200px] flex justify-center bg-red-200 ${
					data.direction == "right" ? "flex-row-reverse " : "flex-row "
				}`}
			>
				<div
					className={`flex-1 flex   py-8 items-center bg-red-400 h-full ${
						data.direction == "right"
							? "flex-row justify-start"
							: "flex-row-reverse justify-end"
					}`}
				>
					<p className="text-3xl font-semibold text-center max-w-[60px]">
						{data.description}
					</p>
					<div className="h-[400px] w-[400px] bg-green-300"></div>
				</div>
				<div
					className={`min-h-[200px] min-w-[200px] bg-green-500 relative  ${"hi"}`}
				></div>
				{/* <div
					className={`flex-1 flex items-center bg-red-100 ${
						data.direction == "right" ? "flex-row" : "flex-row-reverse"
					}`}
				></div> */}
			{/* </div> */}
		</div>
	);
}
