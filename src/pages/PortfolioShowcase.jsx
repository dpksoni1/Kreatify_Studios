import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css"; // Import the CSS file for animations
import ZoomImg from "../components/ZoomImg";

const imageData = {
	"Digital Presence": [
		{
			url: "https://www.impactplus.com/hs-fs/hubfs/14-award-winning-website-designs%20%281%29.jpg?length=1200&name=14-award-winning-website-designs%20%281%29.jpg",
			description: "Award-winning website design.",
		},
		{
			url: "https://dazzletechsolutions.com/wp-content/uploads/2024/01/system-says-webdesign-services.jpg",
			description: "Modern web design services.",
		},
		{
			url: "https://assets-static.invideo.io/images/large/Featured_Image_Video_script_writing_899b7b7435.png",
			description: "Video script writing and production.",
		},
		{
			url: "https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203948209719936683357c_make-video-with-photos.png",
			description: "Video production with photos.",
		},
		{
			url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/IsGraphic_DesignAGoodCareerb.jpg",
			description: "Graphic design career.",
		},
		{
			url: "https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg",
			description: "Creative graphic design.",
		},
		{
			url: "https://cdn.shopify.com/s/files/1/0070/7032/files/social-media-management.jpg?v=1671580688",
			description: "Social media management strategies.",
		},
		{
			url: "https://www.internetandtechnologylaw.com/files/2018/10/iStock-929731224-social-media.jpg",
			description: "Effective social media techniques.",
		},
	],
	Production: [
		{
			url: "https://assets-static.invideo.io/images/large/Featured_Image_Video_script_writing_899b7b7435.png",
			description: "Video script writing and production.",
		},
		{
			url: "https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203948209719936683357c_make-video-with-photos.png",
			description: "Video production with photos.",
		},
	],
	"Graphic Designing": [
		{
			url: "https://www.simplilearn.com/ice9/free_resources_article_thumb/IsGraphic_DesignAGoodCareerb.jpg",
			description: "Graphic design career.",
		},
		{
			url: "https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg",
			description: "Creative graphic design.",
		},
	],
	"Social Media Management": [
		{
			url: "https://cdn.shopify.com/s/files/1/0070/7032/files/social-media-management.jpg?v=1671580688",
			description: "Social media management strategies.",
		},
		{
			url: "https://www.internetandtechnologylaw.com/files/2018/10/iStock-929731224-social-media.jpg",
			description: "Effective social media techniques.",
		},
	],
};

const PortfolioShowcase = () => {
	const { category } = useParams();
	const images = imageData[category] || [];
	const categories = Object.keys(imageData);
	const containerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("fade-in");
					entry.target.classList.remove("animate-on-scroll"); // Remove class to avoid re-animation
					observer.unobserve(entry.target);
				}
			});
		});

		if (containerRef.current) {
			const items = containerRef.current.querySelectorAll(".animate-on-scroll");
			items.forEach((item) => observer.observe(item));
		}
	}, [containerRef]);

	return (
		<div className="w-full flex flex-col items-center">
			<div className="p-8 w-full max-w-[1000px]">
				<h1 className="text-3xl font-bold mb-4 text-white">
					{category ? `${category}` : "Select a Category"}
				</h1>

				{/* Category Links */}
				<nav className="mb-16">
					<ul className="flex flex-wrap space-x-4">
						{categories.map((cat) => (
							<li
								key={cat}
								className={`text-orange-300 ${
									cat === category ? "font-bold" : ""
								}`}
							>
								<Link to={`/portfolio/${cat}`}>{cat}</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Images */}
				<div
					ref={containerRef}
					className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
				>
					{images.length > 0 ? (
						images.map((item, index) => (
							<div
								key={index}
								className={`bg-[#ff924422] image-container animate-on-scroll transition-transform duration-500 ease-in-out transform group rounded-lg flex items-center justify-center`}
							>
								<ZoomImg
									src={item.url}
									alt={`Showcase ${index}`}
									className="object-stretch min-h-full group-hover:scale-105 transition-scale duration-200 cursor-pointer"
								/>
							</div>
						))
					) : (
						<p className="text-center text-gray-500">
							No images available for this category.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default PortfolioShowcase;
