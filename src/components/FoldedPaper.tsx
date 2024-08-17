import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoldedPaper = () => {
	return (
		<figure className=" relative max-w-xs max-h-xs md:max-w-md md:max-h-md rotate-12  flex-[0.5] folded">
			<Image
				className="fold-me-please w-full h-full"
				src="/resume.svg"
				alt=""
				width={360}
				height={360}
			/>

			<span className="folds main">
				<span className="cell main-1"></span>
				<span className="cell main-2"></span>
				<span className="cell main-1"></span>
				<span className="cell main-2"></span>
				<span className="cell main-1"></span>
			</span>

			<span className="folds vertical">
				<span className="cell vertical-1"></span>
				<span className="cell vertical-2"></span>
				<span className="cell vertical-3"></span>
				<span className="cell vertical-4"></span>
				<span className="cell vertical-5"></span>
			</span>

			<span className="folds horizontal">
				<span className="cell horizontal-1"></span>
				<span className="cell horizontal-2"></span>
				<span className="cell horizontal-1"></span>
				<span className="cell horizontal-2"></span>
				<span className="cell horizontal-1"></span>
				<span className="cell horizontal-3"></span>
				<span className="cell horizontal-4"></span>
				<span className="cell horizontal-3"></span>
				<span className="cell horizontal-4"></span>
				<span className="cell horizontal-3"></span>
			</span>
		</figure>
	);
};

export default FoldedPaper;
