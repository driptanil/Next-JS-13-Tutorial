import React from "react";
import Link from "next/link";
function Header() {
	return (
		<div className="mt-5 flex w-full justify-around">
			<Link href={"/"} className="rounded-lg bg-indigo-950 p-2">
				Home
			</Link>
			<Link href={"/about"} className="rounded-lg bg-indigo-950 p-2">
				About
			</Link>
			<Link href={"/contact"} className="rounded-lg bg-indigo-950 p-2">
				Contact
			</Link>
			<Link href={"/pageError"} className="rounded-lg bg-indigo-950 p-2">
				Error
			</Link>
			<Link href={"/not-found"} className="rounded-lg bg-indigo-950 p-2">
				Not Found
			</Link>
		</div>
	);
}

export default Header;
