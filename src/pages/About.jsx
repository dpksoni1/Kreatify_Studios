import React from "react";
import "../App.css";
import { Link } from "react-router-dom"; // Import Link
import Button from "../components/Button";

export default function About() {
	return (
		<div className="w-full px-4 pb-16">
			<div className="text-6xl font-bold text-center flex justify-center w-full text-white">
				<div className="max-w-[900px] mx-[30px] my-[60px]">
					Kreatify Studios.
					<br /> Turning ideas into results that speak for themselves...
				</div>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-full flex justify-evenly gap-4 px-4 max-w-[1000px] flex-wrap">
					<div className="rounded-2xl flex-1">
						<img
							className="object-cover w-full h-full rounded-2xl"
							src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
							alt=""
						/>
					</div>

					<div className="bg-[#F6E5C9] flex-1 rounded-2xl p-6">
						<div className="flex">
							<div>
								<img src="" alt="" />
							</div>
							<div>
								<p className="text-6xl text-orange-400 font-bold">25+</p>
								<p className="text-2xl text-orange-800 font-semibold">
									Happy Clients
								</p>
							</div>
						</div>
						<p className="text-lg text-orange-900 mt-4">
							Our clients are consistently happy because we prioritize their
							needs, communicate openly throughout the process, and consistently
							deliver exceptional quality and value.
						</p>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center mt-[200px]">
				<div className="w-full max-w-[1000px]">
					<p className="text-4xl text-yellow-500 font-semibold z-[20] relative">
						What Can You Expect from us?
					</p>
					<div className="relative">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 z-[20] relative">
							<div className="mt-4 space-y-2">
								<p className="text-3xl font-semibold text-orange-500">
									Creativity
								</p>
								<p className="text-lg text-white">
									We bring fresh and innovative ideas to every project, ensuring
									your brand stands out.
								</p>
							</div>
							<div className="mt-4 space-y-2">
								<p className="text-3xl font-semibold text-orange-500">
									Expertise
								</p>
								<p className="text-lg text-white">
									Our team is skilled and experienced in various aspects of
									media and digital marketing.
								</p>
							</div>
							<div className="mt-4 space-y-2">
								<p className="text-3xl font-semibold text-orange-500">
									Reliability
								</p>
								<p className="text-lg text-white">
									Count on us to meet deadlines and deliver consistently
									high-quality work.
								</p>
							</div>
							<div className="mt-4 space-y-2">
								<p className="text-3xl font-semibold text-orange-500">
									Collaboration
								</p>
								<p className="text-lg text-white">
									We work closely with you to understand your goals and tailor
									our services accordingly.
								</p>
							</div>
							<div className="mt-4 space-y-2">
								<p className="text-3xl font-semibold text-orange-500">
									Communication
								</p>
								<p className="text-lg text-white">
									We maintain open lines of communication to ensure clarity and
									alignment on your vision.
								</p>
							</div>
							<div className="mt-4 space-y-2">
								<p className="text-3xl font-semibold text-orange-500">
									Results
								</p>
								<p className="text-lg text-white">
									Expect measurable outcomes that drive your business forward
									and exceed expectations.
								</p>
							</div>
						</div>

						<img
							src="aboutbg.png"
							alt=""
							className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]"
						/>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center mt-[200px] flex-col">
				<p className="text-4xl text-yellow-500 font-semibold mb-16 w-full max-w-[1000px]">
					Explore Our Work
				</p>
				<div className="w-full max-w-[1000px] about-grid">
					<div className="div1 flex flex-col">
						<img
							className="object-cover w-full h-full"
							src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
							alt=""
						/>

						<div className="h-[80px] bg-slate-800 p-4">
							<p className="text-2xl text-white font-semibold">
								Explore More -{">"}
							</p>
							<p className="text-lg text-orange-500">
								A work that builds perspective...
							</p>
						</div>
					</div>
					<div className="div2">
						<img
							className="object-cover w-full h-full"
							src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
							alt=""
						/>
					</div>
					<div className="div3">
						<img
							className="object-cover w-full h-full"
							src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
							alt=""
						/>
					</div>
					<div className="div4">
						<img
							className="object-cover w-full h-full"
							src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
							alt=""
						/>
					</div>
					<div className="div5">
						<img
							className="object-cover w-full h-full"
							src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center mt-[200px] flex-col space-y-6">
				<p className="text-4xl text-yellow-500 font-semibold mb-4 w-full max-w-[1000px]">
					Our Services
				</p>
				<div className="w-full max-w-[1000px]">
					<div className="relative border border-white rounded-xl overflow-hidden px-8 py-4">
						<img
							src="productio.png"
							alt=""
							style={{ filter: "brightness(0.75)" }}
							className="object-cover z-1 w-full h-full absolute top-0 left-0"
						/>
						<div className="w-full h-full flex flex-col text-white space-y-2">
							<p className="z-10 font-semibold text-3xl">Production</p>
							<p className="text-xl z-10 opacity-75">
								Offering professional photoshoots, video shoots, brand shoots
								now at your location.
							</p>
							<div className="z-10">
								<Link to="/service?service=Production">
									<Button color="orange">Book Now</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-[1000px]">
					<div className="relative border border-white rounded-xl overflow-hidden px-8 py-4">
						<img
							src="digitalpresence.png"
							alt=""
							style={{ filter: "brightness(0.75)" }}
							className="object-cover z-1 w-full h-full absolute top-0 left-0"
						/>
						<div className="w-full h-full flex flex-col text-white space-y-2 items-end">
							<p className="z-10 font-semibold text-3xl">Digital Presence</p>
							<p className="text-xl z-10 opacity-75">
								Want a creative website and app that makes your brand stand out?
							</p>
							<div className="z-10">
								<Link to="/service?service=Digital%20Presence">
									<Button color="orange">Book Now</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-[1000px]">
					<div className="relative border border-white rounded-xl overflow-hidden px-8 py-4">
						<img
							src="graphicdesign.png"
							alt=""
							style={{ filter: "brightness(0.75)" }}
							className="object-cover z-1 w-full h-full absolute top-0 left-0"
						/>
						<div className="w-full h-full flex flex-col text-white space-y-2">
							<p className="z-10 font-semibold text-3xl">Graphic Designing</p>
							<p className="text-xl z-10 opacity-75">
								Stunning logos, posters, banners, and visuals that leave a
								lasting impression.
							</p>
							<div className="z-10">
								<Link to="/service?service=Graphic%20Designing">
									<Button color="orange">Book Now</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-[1000px]">
					<div className="relative border border-white rounded-xl overflow-hidden px-8 py-4">
						<img
							src="social.png"
							alt=""
							style={{ filter: "brightness(0.75)" }}
							className="object-cover z-1 w-full h-full absolute top-0 left-0"
						/>
						<div className="w-full h-full flex flex-col text-white space-y-2 items-end">
							<p className="z-10 font-semibold text-3xl">
								Social Media Management
							</p>
							<p className="text-xl z-10 opacity-75">
								Boost your online presence with engaging content and strategic
								management.
							</p>
							<div className="z-10">
								<Link to="/service?service=Social%20Media%20Management">
									<Button color="orange">Book Now</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
