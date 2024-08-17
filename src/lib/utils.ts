const AVERAGE_WORDS_PER_MINUTE = 200;
function countWords(text: string): number {
	const words = text.split(/\s+/); // Split by spaces
	return words.length;
}

export function calculateReadingTime(
	text: string,
	wordsPerMinute = AVERAGE_WORDS_PER_MINUTE
): string {
	const wordCount = countWords(text);
	const minutes = Math.ceil(wordCount / wordsPerMinute);
	return `${minutes} min read`;
}

export function formatDate(dateString: string) {
	return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC",
	});
}
