import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? "w-full" : "w-0"
				}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const NavBar = () => {
	return (
		<header className="flex items-center justify-between w-full px-32 py-8 font-medium">
			<nav className="flex gap-10">
				<CustomLink href="/" title="Home" />
				<CustomLink href="/about" title="About" />
				<CustomLink href="/projects" title="Projects" />
				<CustomLink href="/articles" title="Articles" />
			</nav>
			<nav className="flex flex-wrap items-center justify-center gap-6">
				<motion.a
					href="https://twitter.com"
					target={"_blank"}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6"
				>
					<TwitterIcon />
				</motion.a>
				<motion.a
					href="https://github.com"
					target={"_blank"}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6"
				>
					<GithubIcon />
				</motion.a>
				<motion.a
					href="https://linkedin.com"
					target={"_blank"}
					whileHover={{ y: -2 }}
					whileTap={{ scale: 0.9 }}
					className="w-6"
				>
					<LinkedInIcon />
				</motion.a>
			</nav>
			<div className="absolute left-[50%] -translate-x-1/2">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
