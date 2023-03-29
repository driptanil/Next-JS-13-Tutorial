"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="bg-red-950 text-red-400 p-6 w-60">
			<h2>Something went wrong!</h2>
			<button className="bg-slate-700 p-2 rounded-lg m-2"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
