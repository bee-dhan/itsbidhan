import FoldedPaper from "@/components/FoldedPaper";
import Avatar from "@/components/UI/Avatar";
import Card from "@/components/UI/Card";
import Input from "@/components/UI/Input";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Articles",
	description:
		"All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",
};

export default async function page() {
	let articles = await getAllArticles();

	return (
		<>
			<section className="flex items-center space-y-10 justify-center flex-col py-10">
				<Avatar />
				<LeadText>
					{<HeadingText>Introducing the typescript</HeadingText>}
					<p className="md:text-xl">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
						fuga. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Dolorem, porro aspernatur alias nemo exercitationem quae animi
						repellat quos dicta tenetur!
					</p>
				</LeadText>
				<div className="rounded-2xl border-2 md:p-2 p-1 flex items-center  space-x-5">
					<Link href={"https://twitter.com/BidhanBhandari3"}>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="md:w-10 h-10"
						>
							<path
								d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</Link>
					<Link href="https://github.com/leooism">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="md:w-10 md:h-10"
						>
							<path
								d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</Link>
					<Link href="https://www.linkedin.com/in/bidhanbhandari">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="md:w-10 md:h-10"
						>
							<path
								d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							></path>
						</svg>
					</Link>
				</div>
			</section>
			<nav className="static px-10 flex space-x-5">
				<Link href="#articles">Articles</Link>
				<Link href="#projects">Projects</Link>
				<Link href="#about">About</Link>
			</nav>
			<section
				className="flex p-10 md:space-x-10 gap-y-10 flex-col md:flex-row"
				id="articles"
			>
				<div className="flex flex-col gap-10  order-2 md:order-1">
					{articles.map((article) => (
						<ArticleCard key={article.slug} article={article}></ArticleCard>
					))}
				</div>
				<Card className="order-1 md:order-2 border-2 border-gray-600 p-5 items-center flex flex-col justify-center space-y-5">
					<svg
						width="36"
						height="30"
						viewBox="0 0 36 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M31.3335 1.66699H4.66683C2.82588 1.66699 1.3335 3.15938 1.3335 5.00033V25.0003C1.3335 26.8413 2.82588 28.3337 4.66683 28.3337H31.3335C33.1744 28.3337 34.6668 26.8413 34.6668 25.0003V5.00033C34.6668 3.15938 33.1744 1.66699 31.3335 1.66699Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M34.6668 6.66699L19.7168 16.167C19.2023 16.4894 18.6074 16.6603 18.0002 16.6603C17.393 16.6603 16.798 16.4894 16.2835 16.167L1.3335 6.66699"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<div className="flex flex-col text-center">
						<h1 className="font-semibold">Always Get Updated</h1>
						<p>Get the latest updated, stay ahead</p>
					</div>
					<div className="flex gap-x-10">
						<Input placeholder="Your email" className="outline-none" />
						<button className="border-2 rounded-lg py-2 px-4 hover:border-gray-600 hover:transition">
							Join
						</button>
					</div>
				</Card>
			</section>
			<section
				className="p-10 flex flex-col items-center justify-center"
				id="projects"
			>
				<LeadText>
					<HeadingText>
						Things I’ve made trying to put my dent in the universe.
					</HeadingText>
					<p className="md:text-xl">
						I’ve worked on tons of little projects over the years but these are
						the ones that I’m most proud of. Many of them are open-source, so if
						you see something that piques your interest, check out the code and
						contribute if you have ideas for how it can be improved.
					</p>
				</LeadText>
				<div className="flex flex-col md:flex-row space-x-10 space-y-10 py-10 ">
					<Card className="flex-[0.5] space-y-3">
						<Card.CardHeader>Lorem, ipsum.</Card.CardHeader>
						<Card.CardSubHeader className="text-gray-400">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
							excepturi!
						</Card.CardSubHeader>
						<Card.CardContent>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
							esse nostrum ratione, tenetur dolore sunt fugit nobis aperiam
							officiis nemo.
						</Card.CardContent>
						<Card.CardFooter className="flex space-x-5">
							<Link href="#">
								<Card className="border-2 w-fit">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										></path>
									</svg>
								</Card>
							</Link>
							<Link href="#">
								{" "}
								<Card className="border-2 w-fit">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
											fill="currentColor"
											fillRule="evenodd"
											clipRule="evenodd"
										></path>
									</svg>
								</Card>
							</Link>
						</Card.CardFooter>
					</Card>
					<div className="flex-[0.5]"></div>
				</div>
			</section>
			<section
				className="p-10 flex flex-col items-center justify-center"
				id="about"
			>
				<LeadText>
					<HeadingText>
						How I managed to create my own unique universe{" "}
					</HeadingText>
					<p className="md:text-xl">
						I’ve worked on tons of little projects over the years but these are
						the ones that I’m most proud of. Many of them are open-source, so if
						you see something that piques your interest, check out the code and
						contribute if you have ideas for how it can be improved.
					</p>
				</LeadText>
				<div className="flex flex-col md:flex-row py-10 space-x-10">
					<div className="relative flex-[0.6] overflow-visible ">
						<FoldedPaper />
						<div className="absolute text-xs md:text-sm md:top-0 left-1/2 -translate-x-1/2 mt-10 md:mt-0 z-10 md:ml-20  md:left-full w-fit whitespace-nowrap p-2 rounded-full border-2 ">
							Get my CV
						</div>
					</div>
					<div className="flex-[0.5] hidden"></div>
				</div>
			</section>
		</>
	);
}
function HeadingText({ children }: { children: React.ReactNode }) {
	return <h1 className="text-xl md:text-3xl">{children}</h1>;
}
function LeadText({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col space-y-5 flex-[0.5] md:w-[50%]  w-[80%] text-center">
			{children}
		</div>
	);
}
