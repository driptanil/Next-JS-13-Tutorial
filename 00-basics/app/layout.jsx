import { Roboto_Slab } from "next/font/google";
const font = Roboto_Slab({ subsets: ["latin"] });
import "./globals.css";
import Header from "./header";
import Search from "../components/clients/search";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<div className="flex items-center justify-center">
					<div className="my-2 flex w-4/6 flex-col items-center justify-center rounded-xl bg-slate-900/70">
						layout.jsx
						<Header />
						<Search />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
