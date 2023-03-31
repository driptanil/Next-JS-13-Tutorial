import React from "react";

function Page(props) {
	console.log(props);
	return (
		<div className="m-4 w-60 rounded-2xl bg-green-900/80 p-4">
			<h2>app/product/[id]/page.jsx</h2>
			<p className={`text-right text-sm`}>Product {props.params.id}</p>
		</div>
	);
}

export default Page;
