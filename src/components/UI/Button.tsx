import React from "react";

const Button = (props: {
	className: string;
	name: string;
	onClick: () => void;
}) => {
	return (
		<button className={`${props.className}`} {...props}>
			{props.name}
		</button>
	);
};

export default Button;
