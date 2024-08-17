import Image from "next/image";

export default function Avatar({ imgSrc }: { imgSrc?: any | undefined }) {
	return (
		<div className="md:w-40 md:h-40 w-20 h-20 bg-slate-50 shadow-lg z-10 rounded-full border-4 border-purple-700">
			<Image
				src={imgSrc?.profile_img}
				alt="avatar"
				className="w-full h-full rounded-full"
				width={80}
				height={80}
			/>
		</div>
	);
}
