"use client";
import React from "react";

const Form = () => {
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await fetch("/api/message", {
			method: "POST",
			body: JSON.stringify({
				gmail: "Test@gmail.com",
				message: "Hello from nepal",
			}),
		});
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="shadow-2xl rounded-2xl w-[60%] mx-auto p-2"
		>
			<h1 className="text-center text-lg">Want to grow together?</h1>
			<div className="mb-6">
				<label
					for="email"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					Your email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="john@gmail.com"
					required
				/>
			</div>
			<div className="mb-6">
				<label
					for="message"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					Your Queries
				</label>
				<textarea
					type="text"
					name="message"
					id="message"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					required
				/>
			</div>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
