import React from "react";
import Card from "./UI/Card";
import { ArticleWithSlug } from "@/lib/articles";
import Link from "next/link";

const ArticleCard = ({ article }: { article: ArticleWithSlug }) => {
	return (
		<Card className="border-2 p-5   flex flex-col justify-start space-y-5">
			<Card.CardHeader className="md:text-xl ">{article.title}</Card.CardHeader>
			<Card.CardSubHeader className="flex space-x-10 text-gray-400">
				<p>
					{new Intl.DateTimeFormat("en-US", {
						day: "2-digit",
						month: "short",
					}).format(new Date())}
				</p>
				<p>10 Min</p>
			</Card.CardSubHeader>
			<Card.CardContent>{article.description}</Card.CardContent>
			<Link href={`/articles/${article.slug}`}>
				{" "}
				<Card.CardFooter className="flex items-center text-sm">
					Read More
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</Card.CardFooter>
			</Link>
		</Card>
	);
};

export default ArticleCard;
