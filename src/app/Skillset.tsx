import React from "react";

const comp = `mongodb.svg
/django-icon.svg
/docker-icon.svg
/html-5.svg
/express.svg
/docker-icon.svg
/graphql.svg
/kubernetes.svg
/nextjs-icon.svg
/nodejs.svg
/webassembly.svg
/zod.svg
/typescript-icon-round.svg
/tailwindcss-icon.svg
/redux-saga.svg
/redux.svg
/python.svg
/prisma.svg
/rust.svg`
	.split("/")
	.map((el, i) => ({ key: i, src: el }))
	.map((el) => ({
		key: el.key,
		src: el.src.replace("/n", ""),
	}));

import RingCarousel from "../components/RingCarousel";

const Skillset = () => {
	return (
		<div className="flex w-full flex-col justify-center  ">
			<div className="flex w-full">
				<img src="/TIU.svg" alt="TIU" className="w-40 md:w-60" />
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<RingCarousel
					height={460}
					width={600}
					yOrigin={42}
					yRadius={48}
					autoPlay={true}
				>
					{comp.map((el) => (
						<div key={el.key} className="w-32 h-32 md:w-60 md:h-60 ">
							<img src={`/${el.src}`} alt={el.src} />
						</div>
					))}
				</RingCarousel>
			</div>
		</div>
	);
};

export default Skillset;
