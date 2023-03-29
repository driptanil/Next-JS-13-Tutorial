import { Roboto_Slab } from "next/font/google";
const font = Roboto_Slab({ subsets: ["latin"] });
import "./globals.css";
import head from "./head";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<div className="flex items-center justify-center">
					<div className="my-2 flex w-4/5 flex-col items-center justify-center rounded-xl bg-slate-900/70 py-5">
						layout.jsx
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
