import React from "react";
import { useLocation } from "react-router";
import Button from "../components/Button"; // Adjust the path if necessary
import { Link } from "react-router-dom";

const serviceData = {
	"Digital Presence": {
		title: "Digital Presence",
		plans: ["LaunchPad", "Growth Catalyst", "Stellar Presence"],
		features: [
			"Responsive Design: Websites and apps that adapt seamlessly to all devices, ensuring a consistent user experience and accessibility on-the-go.",
			"SEO Optimization: Strategic implementation of SEO practices to enhance visibility and drive organic traffic to your digital platforms.",
			"Ongoing Maintenance: Providing continuous management and updates to keep your website and app running smoothly and efficiently.",
		],
		image:
			"https://www.pngall.com/wp-content/uploads/2016/07/Responsive-Web-Design-PNG-Image.png", // Replace with actual image URL
	},
	"Graphic Designing": {
		title: "Graphic Designing",
		plans: ["Starter Bundle", "Creative Edge", "Signature Design Collection"],
		features: [
			"Brand Identity Packages: Comprehensive design solutions including logos, color schemes, and typography that establish a cohesive brand identity across all platforms.",
			"Print and Digital Collateral: Creative designs for physical and digital materials such as posters, brochures, and social media graphics that leave a lasting impression.",
			"Quick Turnaround Times: Efficient design processes and rapid revisions that ensure your visual content is delivered promptly without compromising quality.",
		],
		image:
			"https://cdn-eokfn.nitrocdn.com/diBQUISGKsmoTQlhuYAsruhMTNXpLtAP/assets/images/optimized/rev-1d0174f/silica.co.in/wp-content/uploads/2020/03/Graphic-Design.png",
	},
	"Social Media Management": {
		title: "Community Engagement",
		plans: ["Social Starter", "Engagement Booster", "Influencer Impact"],
		features: [
			"Content Calendar Management: Strategic planning and scheduling of content to maintain consistency and maximize engagement.",
			"Community Engagement Strategies: Proactive interaction with your audience through comments, messages, and live sessions that build strong customer relationships.",
			"Performance Analytics: Detailed insights into social media performance with metrics on reach, engagement, and conversion rates to optimize future campaigns effectively.",
		],
		image:
			"https://maxst.icons8.com/vue-static/icon/popular-request/request-social-media.png", // Replace with actual image URL
	},

	Production: {
		title: "Production",
		plans: ["Basic Production", "Advanced Production", "Premium Production"],
		features: [
			"High-Quality Video Production: Professional video creation with high-definition cameras and advanced editing techniques.",
			"Script and Storyboarding: Comprehensive planning and scripting to ensure your video conveys your message effectively.",
			"Post-Production Services: Enhanced editing, color correction, and sound design to deliver a polished final product.",
		],
		image: "https://pngimg.com/uploads/photo_camera/photo_camera_PNG101601.png", // Replace with actual image URL
	},
};

export default function Service() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const serviceType = searchParams.get("service");

	const service = serviceData[serviceType] || {}; // Fallback to empty object if serviceType is not found

	const tagline =
		{
			"Digital Presence":
				"Elevate your online visibility and drive success with our innovative digital solutions.",
			"Graphic Designing":
				"Crafting visuals that captivate and communicate your brand’s essence.",
			"Social Media Management":
				"Engage and grow your community with tailored social media strategies.",
			"Influencer-Brand Collaboration":
				"Connect with the right influencers to amplify your brand’s message.",
			Production:
				"Delivering high-quality video production with creative storytelling and expert editing.",
		}[serviceType] ||
		"Explore our range of services designed to meet your needs.";

	return (
		<div className="w-full">
			<div
				style={{
					backgroundImage: `url(${
						service.image ||
						"https://t4.ftcdn.net/jpg/06/36/68/69/360_F_636686955_VFjNbAIEBfPrgNEF2yIb7JP4iUHdI7BV.jpg"
					})`,
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "100vh",
					width: "100%",
					position: "relative",
				}}
				className="parallax flex items-center justify-center h-screen w-full"
			>
				{/* Black overlay */}
				<div
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% opacity black
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: 1,
					}}
				></div>

				{/* Content */}
				<div
					className="text-center text-[#ffffff] max-w-2xl px-4"
					style={{ zIndex: 2 }}
				>
					<h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-4xl border-1 border-black">
						{service.title || "Our Services"}
					</h1>
					<p className="text-lg md:text-xl">{tagline}</p>
					<div className="flex justify-center gap-4 mt-6">
						<Link
							className="border border-white bg-[#00000037] text-xl rounded-full px-6 py-4"
							to={`/portfolio/${service.title}`}
						>
							View Portfolio
						</Link>{" "}
						<Link
							className="bg-orange-600 text-xl rounded-full px-6 py-4"
							to="/contact"
						>
							Book Now
						</Link>
					</div>
				</div>
			</div>

			<div className="bg-[#F34C19] text-white p-8 md:p-16">
				<h1 className="max-w-5xl text-2xl md:text-4xl font-bold mb-4 text-black mx-auto">
					{service.title || "Unmatched Service"}
				</h1>
				<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
					<div className="md:w-1/2">
						<ul className="space-y-4 text-lg md:text-xl">
							{service.features?.map((feature, index) => (
								<li key={index} className="flex items-start">
									<span className="mr-2">✔️</span>
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
						<img
							src={
								service.image ||
								"https://static.vecteezy.com/system/resources/previews/014/527/495/non_2x/plain-black-dslr-camera-free-png.png"
							}
							alt={service.title || "Service Image"}
							className="w-full max-w-xs md:max-w-sm"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
