import React, { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			{...props}
			className={`${props.className} border-2 rounded-lg p-2`}
			placeholder={props.placeholder}
		></input>
	);
};

export default Input;
