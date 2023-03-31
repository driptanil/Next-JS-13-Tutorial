"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="mt-4 flex w-60 flex-col items-center justify-center rounded-2xl bg-red-950 p-6 text-red-400">
			<h2>Something went wrong!</h2>
			<button
				className="m-2 rounded-lg bg-slate-700 p-2"
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
