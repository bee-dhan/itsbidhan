"use client";

import React, { useCallback, useEffect, useState } from "react";
import type { testimonialCarouselItemType } from "../app/Testimonials";
import Avatar from "@/components/UI/Avatar";
import classes from "./Testimonials.module.css";

import Card from "@/components/UI/Card";
const TestimonialCarousel = ({
	carousel,
}: {
	carousel: testimonialCarouselItemType[];
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlideHandler = useCallback(() => {
		if (currentSlide >= carousel.length - 1) return setCurrentSlide(0);
		setCurrentSlide((prevSlide) => prevSlide + 1);
	}, [currentSlide, carousel]);
	const previousSlideHandler = () => {
		if (currentSlide <= 0) return setCurrentSlide(carousel.length - 1);
		setCurrentSlide((prevSlide) => prevSlide - 1);
	};
	useEffect(() => {
		const slideDOM = document.querySelectorAll<HTMLDivElement>("#slide");
		slideDOM.forEach(function (slide, i) {
			slide.style.transform = `translateX(${i * 100}%)`; //Sets inital transformed position
		});
	}, []);
	useEffect(() => {
		const slideDOM = document.querySelectorAll<HTMLDivElement>("#slide");
		slideDOM.forEach(function (slide, i) {
			slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
		});
	}, [currentSlide]);

	const changeSlideOnDot = (e: any) => {
		setCurrentSlide(e.target.dataset.slide);
	};
	return (
		<div className="flex  flex-col gap-2 w-full  items-center justify-center">
			<Card className="mx-auto rounded-2xl bg-white  shadow-2xl relative md:w-[500px] md:h-[250px]  w-[250px] h-[130px]">
				<Avatar imgSrc={carousel.find((slide) => slide.id === currentSlide)} />

				<div className="relative w-full h-full overflow-hidden  ">
					{carousel.map((slide) => (
						<div
							className={` absolute flex flex-col md:left-12 left-2  w-full transition duration-300 ease-linear top-10`}
							id="slide"
							key={slide.id}
						>
							<div className="flex flex-col md:gap-1.5 md:text-sm text-[8px]   md:mx-0">
								<span className="font-semibold mx-3">{slide.name}</span>
							</div>

							<div className="text-xs w-full px-2 text-[7px] py-2 md:h-full   italic md:w-96 md:my-6 before:w-full before:text-start before:-left-2 relative before:content-['\201C'] before:block before:text-2xl md:before:text-[96px]  before:absolute before:text-gray-500 md:before:top-0 before:-top-1  md:before:-left-12 after:content-['\201D'] after:block md:after:text-[96px]  after:absolute after:text-gray-500 md:after:w-full after:w-[80%] after:text-end md:after:mt-2  after:text-[20px] ">
								<blockquote>{slide.testimonial}</blockquote>
							</div>
							<div className={classes.slide_social}></div>
						</div>
					))}
				</div>

				<div className="w-full absolute top-0 left-0 flex justify-between items-center h-full">
					<div>
						<button
							className="bg-slate-50 shadow-lg flex items-center justify-center rounded-full outline-none border-none  mx-3 text-xl p-0.5 text-center"
							onClick={previousSlideHandler}
							id="prev"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-2 h-2 md:w-5 md:h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
					</div>
					<div>
						<button
							className="bg-slate-50 shadow-lg flex justify-center items-center rounded-full outline-none border-none mx-3 text-xl p-0.5 text-center"
							id="next"
							onClick={nextSlideHandler}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="md:w-5 md:h-5 w-2 h-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</Card>

			<div className="flex gap-1 justify-center mt-1.5">
				{carousel.map((slide) => {
					return (
						<button
							key={slide.id}
							data-slide={slide.id}
							className={`w-3 h-3 shadow-lg rounded-full bg-slate-50 transition-[border] duration-300 ease-in hover:shadow-2xl`}
							id="dot"
							onClick={changeSlideOnDot}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TestimonialCarousel;
