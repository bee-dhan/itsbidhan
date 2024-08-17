import "./globals.css";
import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import Footer from "@/app/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
	title: "Full Stack Developer",
	description:
		"Highly motivated and enthuisatic developer, React Js, NodeJs, mongodb, sql database, remote, internship",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{/* <Header /> */}
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
