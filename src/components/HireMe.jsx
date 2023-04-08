import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
	return (
		<div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4">
			<div className="relative flex items-center justify-center w-48 h-auto">
				<CircularText className={"fill-dark animate-spin-slow"} />
				<Link
					href="mailto:abcd@gmail.com"
					className="absolute flex items-center justify-center w-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md left-1/2 top-1/2 bg-dark text-light border-dark aspect-square hover:bg-light hover:text-dark"
				>Hire me</Link>
			</div>
		</div>
	);
};

export default HireMe;
