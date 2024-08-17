"use client";

import { useRouter } from "next/navigation";

import { Prose } from "@/components/Prose";
import { type ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ArticleLayout({
	article,
	children,
}: {
	article: ArticleWithSlug;
	children: React.ReactNode;
}) {
	let router = useRouter();
	let { previousPathname } = {
		previousPathname: "",
	};

	return (
		<div className="mt-16 lg:mt-32">
			<div className="xl:relative">
				<div className="mx-auto max-w-2xl">
					<article>
						<header className="flex flex-col">
							<h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
								{article.title}
							</h1>
							<time
								dateTime={article.date}
								className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
							>
								<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
								<span className="ml-3">{formatDate(article.date)}</span>
							</time>
						</header>
						{children}
					</article>
				</div>
			</div>
		</div>
	);
}
