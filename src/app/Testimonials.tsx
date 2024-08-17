import React, { useState, useEffect, useCallback } from "react";
import classes from "./Testimonials.module.css";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Image from "next/image";

export type testimonialCarouselItemType = {
	id: number;
	name: string;
	profile_img: string;
	position?: string;
	testimonial: string;
	socialMediaLinks?: [
		{
			title: string;
			link: string;
		}
	];
};
const carousel: testimonialCarouselItemType[] = [
	{
		id: 0,
		name: "Bishal Bhandari",
		profile_img:
			"https://images.teamtailor-cdn.com/images/s3/teamtailor-production/square_452-v4/image_uploads/d68c81b5-873f-467d-b4e1-ee5e555f2b74/original.jpeg?outputFormat=webp",
		position: "Support Associate - upstream",
		testimonial: `Bidhan is a talented and experienced full-stack developer who has worked on several projects for our company. They have a strong knowledge of both front-end and back-end technologies, and they can handle complex and challenging tasks with ease`,
		socialMediaLinks: [
			{
				title: "facebook",
				link: "www.facebook.com/bishalbhandari",
			},
		],
	},
	{
		id: 1,
		name: "Kusiyaiat Krishna",
		profile_img: "https://krishnakusiyait.com.np/logo.webp",
		position: "Freelancer",
		testimonial: `
		Bidhan is a great coworker and a valuable asset to our team. He is always willing to help, share their knowledge, and collaborate on projects. 
		He has excellent communication and problem-solving skills, 
		and they always deliver high-quality work on time. 
		I enjoy working with them and I highly recommend them for any position 
		they apply for.`,
	},
];
function Testimonial(props: any) {
	return (
		<div className="flex relative flex-col gap-2 p-20  ">
			<h1 className="text-center md:text-2xl text-sm font-semibold text-white ">
				Testimonial
			</h1>
			<Image
				width={500}
				height={500}
				src="/Union.png"
				alt="img"
				className="absolute w-full h-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
			/>

			<TestimonialCarousel carousel={carousel} />
		</div>
	);
}

export default Testimonial;
