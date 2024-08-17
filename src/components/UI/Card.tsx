import React from "react";

const Card = (props: { children: React.ReactNode; className: string }) => {
	return (
		<div className={`${props.className} rounded-lg p-2`}>{props.children}</div>
	);
};

const CardHeader = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <h1 className={`${className} font-semibold`}>{children}</h1>;

const CardSubHeader = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <h1 className={`${className} font-medium`}>{children}</h1>;
const CardFooter = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => <h1 className={`${className} `}>{children}</h1>;
Card.CardSubHeader = CardSubHeader;
Card.CardHeader = CardHeader;
Card.CardFooter = CardFooter;

const CardContent = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return <div className={`${className}`}>{children}</div>;
};
Card.CardContent = CardContent;
export default Card;
