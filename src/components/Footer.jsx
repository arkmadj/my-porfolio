import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full text-lg font-medium border-t-2 border-solid border-dark">
			<Layout className="flex items-center justify-between py-8">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<Link href="/">Zultan</Link>
				<Link href="/">Say hello</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
