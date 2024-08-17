"use client";
import React from "react";
import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";
const Modal = (props: { onShowModal: () => void }) => {
	console.log(props);
	return (
		<>
			{createPortal(
				<div
					className="w-full h-full bg-gray-700 absolute top-0 left-0 z-[10] opacity-[0.6] "
					onClick={props.onShowModal}
				></div>,
				document.body
			)}
			{createPortal(
				<Card className="absolute  rounded-lg gap-2 flex flex-col items-center w-fit mx-auto z-50 p-2 border-2  bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<h1 className="text-2xl text-blue-600 font-semibold">Newsletter</h1>
					<p className="text-sm">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
						illum?
					</p>
					<div className="flex gap-2">
						<input
							className="w-60 border-2 border-gray-500 bg-transparent text-white p-2 rounded-lg outline-none"
							placeholder="johndoe@gmail.com"
						/>
						<Button
							className="p-2  text-xs md:text-sm rounded-lg border-2 border-gray-600"
							name="Subscribe"
						/>
					</div>
				</Card>,
				document.body
			)}
		</>
	);
};

export default Modal;
