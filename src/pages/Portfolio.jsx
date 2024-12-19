import React from "react";
import ServicesSection from "../components/ServicesSection";

export default function Portfolio() {
	const ServicesContent = [
		{
			title: "Digital Presence",
			description:
				"“We create and manage stunning, user-friendly websites and apps.”",
			img1: "https://www.impactplus.com/hs-fs/hubfs/14-award-winning-website-designs%20%281%29.jpg?length=1200&name=14-award-winning-website-designs%20%281%29.jpg",
			img2: "https://dazzletechsolutions.com/wp-content/uploads/2024/01/system-says-webdesign-services.jpg",
			direction: "right",
			color: "white",
		},
		{
			title: "Production",
			description: "“Our team of professionals will make your brand shine.”",
			img1: "https://assets-static.invideo.io/images/large/Featured_Image_Video_script_writing_899b7b7435.png",
			img2: "https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203948209719936683357c_make-video-with-photos.png",
			direction: "right",
			color: "black",
		},
		{
			title: "Graphic Designing",
			description:
				"“Our designs captivate and elevate your brand's visual identity.”",
			img2: "https://www.simplilearn.com/ice9/free_resources_article_thumb/IsGraphic_DesignAGoodCareerb.jpg",
			img1: "https://cdn.dribbble.com/users/1081269/screenshots/7604604/media/be950b7b8a7fccefa0a758e0a856378e.jpg",
			direction: "right",
			color: "white",
		},
		{
			title: "Social Media Management",
			description:
				"“We boost your brand's engagement and growth with our expert social media strategies.”",
			img1: "https://cdn.shopify.com/s/files/1/0070/7032/files/social-media-management.jpg?v=1671580688",
			img2: "https://www.internetandtechnologylaw.com/files/2018/10/iStock-929731224-social-media.jpg",
			direction: "right",
			color: "black",
		},
	];
	return (
		<div className="w-full">
			<div
				style={{
					backgroundImage:
						"url('https://cdn.pixabay.com/photo/2021/12/02/11/24/background-6840282_1280.png')",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "100vh",
					width: "100%",
				}}
				className="parallax flex items-center justify-center h-screen w-full"
			>
				<h1 className="text-black text-4xl md:text-6xl font-bold max-w-[1100px] drop-shadow-lg">
					Discover a showcase of our creativity, expertise, and the successful
					projects we've proudly delivered for our clients.
				</h1>
			</div>

			{ServicesContent.map((data, index) => (
				<ServicesSection key={index} data={data} />
			))}
		</div>
	);
}
