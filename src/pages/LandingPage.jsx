import React from "react";
import Button from "../components/Button";
import ServicesCard from "../components/ServicesCard";
import { useState } from "react";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import { useNavigate } from "react-router";

export default function LandingPage() {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const navigate = useNavigate();
	return (
		<div className="w-full min-h-[100vh]">
			<div className="bg-black text-white p-8">
				<div className="flex justify-center flex-wrap ">
					{/* Left column */}
					<div className=" flex flex-col justify-between mb-16">
						<h1 className="text-5xl font-bold mb-8 leading-snug">
							Bringing <br />
							Visions to <br /> Life!
						</h1>
						<div className="mb-8 ">
							<img
								src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
								alt="Geese"
								className="w-48 h-48 object-cover rounded-full lg:rounded-xl"
							/>
							<p
								className="mt-2 text-white text-xl font-medium"
								onClick={() => {
									navigate("/portfolio");
								}}
							>
								Explore work →
							</p>

							<Button
								className="border-[1px] mt-[30px] mr-[16px]"
								variant="outline"
								color="orange"
								onClick={() => {
									navigate("/contact");
								}}
							>
								Get in touch
							</Button>
							<Button
								className="border-[1px] "
								variant="outline"
								color="orange"
								onClick={() => {
									navigate("/about");
								}}
							>
								Know more
							</Button>
						</div>
					</div>

					{/* Right column */}
					<div className="mb-8 lg:flex hidden justify-center items-center mx-[30px] mr-[60px] ">
						<img
							style={{ aspectRatio: "1/1" }}
							src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
							alt="Cityscape"
							className="w-full max-w-[600px] object-cover rounded-full"
						/>
					</div>
					<div className="max-w-[300px] flex flex-col justify-between pb-[60px]">
						<div>
							<h2 className="text-3xl font-bold text-orange-500">
								Why Kreatify?
							</h2>
							<p className="text-sm mb-4">we bring to your table</p>
							<ul className=" text-sm ml-[30px]">
								<li className="text-md">Innovation</li>
								<li className="text-gray-400"> Bringing unique ideas</li>
								<div className="bg-orange-500 h-[0.1px] my-3"></div>
								<li className="text-md">Communication</li>
								<li className="text-gray-400">
									Ensuring clarity and alignment
								</li>
								<div className="bg-orange-500 h-[0.1px] my-3"></div>
								<li className="text-md">Expertise</li>
								<li className="text-gray-400">Delivers quality & efficiency</li>
								<div className="bg-orange-500 h-[0.1px] my-3"></div>
								<li className="text-md">Reliability</li>
								<li className="text-gray-400">Consistency is the key</li>
							</ul>
						</div>

						<p className="mt-8  text-yellow-300 text-xl ml-[30px]">
							From stunning visuals to seamless digital experiences, we bring
							your brand to life with passion and precision...
						</p>
					</div>
				</div>
			</div>
			{/* <Button
				variant="filled"
				color="orange"
				onClick={handleOpenModal}
				size="large"
				className="px-20"
			>
				Open Modal
			</Button>
			<Modal show={showModal} handleClose={handleCloseModal}>
				<h2 className="text-xl font-bold mb-4">Modal Title</h2>
				<p className="mb-4">
					This is a reusable modal component using Tailwind CSS.
				</p>
				<button
					onClick={handleCloseModal}
					className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
				>
					Close Modal
				</button>
			</Modal>{" "}
 */}

			<div className="flex items-center flex-col">
				<h1 className="text-5xl font-bold text-white mb-[50px]">
					Our Services
				</h1>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(220px,2fr))] gap-4 max-w-[1000px] w-full px-4">
					<ServicesCard
						service={{
							logo: "createIcon.png",
							background: "productio.png",
							title: "Production",
							description:
								"Offering professional photoshoots, video shoots, brand shoots now at your location.",
						}}
					/>
					<ServicesCard
						service={{
							logo: "globe.svg",
							background:
								"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSq2NS12TV2meVHXnB9MO_pHpyTn8X0Z8lVZ5-uXuGPnqrRnEjcDZZMOoKYkewpyG3lJ8&usqp=CAU",
							title: "Digital Presence",
							description:
								"Want a creative website and app that makes your brand stand out?",
						}}
					/>
					<ServicesCard
						service={{
							logo: "palette.svg",
							background: "palette.svg",
							title: "Graphic Designing",
							description:
								"Stunning logos, posters, banners, and visuals that leave a lasting impression.",
						}}
					/>
					<ServicesCard
						service={{
							logo: "hash.svg",
							background: "social.png",
							title: "Social Media Management",
							description:
								"Boost your online presence with engaging content and strategic management.",
						}}
					/>
				</div>
			</div>
			<footer className="mt-8 text-right text-xl text-white p-8">
				©2024 kreatify studios
			</footer>
		</div>
	);
}
