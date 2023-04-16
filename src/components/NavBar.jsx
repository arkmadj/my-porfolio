import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
	GithubIcon,
	LinkedInIcon,
	MoonIcon,
	SunIcon,
	TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? "w-full" : "w-0"
				} dark:bg-light`}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
	const router = useRouter();

	const handleClick = () => {
		toggle();
		router.push(href);
	};

	return (
		<button
			href={href}
			className={`${className} relative group text-light dark:text-dark`}
			onClick={handleClick}
		>
			{title}
			<span
				className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 bottom-0 group-hover:w-full transition-[width] ease duration-300 ${
					router.asPath === href ? "w-full" : "w-0"
				} dark:bg-light`}
			>
				&nbsp;
			</span>
		</button>
	);
};

const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="relative flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light">
			<button
				className="flex-col items-center justify-center hidden lg:flex"
				onClick={handleClick}
			>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
						isOpen ? "opacity-0" : "opacity-100"
					}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
						isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
					}`}
				></span>
			</button>
			<div className="flex items-center justify-between w-full lg:hidden">
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
						className="w-6 rounded-full bg-light dark:bg-dark"
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

					<button
						onClick={() => setMode(mode === "light" ? "dark" : "light")}
						className={`flex items-center justify-center p-1 ml-3 rounded-full ${
							mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
						}`}
					>
						{mode === "dark" ? (
							<SunIcon className={"fill-dark"} />
						) : (
							<MoonIcon className={"fill-dark"} />
						)}
					</button>
				</nav>
			</div>

			{isOpen ? (
				<motion.div
					initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
					animate={{ scale: 1, opacity: 1}}
					className="flex items-center justify-between min-w-[70vw] flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
				>
					<nav className="flex flex-col items-center justify-center gap-4">
						<CustomMobileLink href="/" title="Home" toggle={handleClick} />
						<CustomMobileLink
							href="/about"
							title="About"
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/projects"
							title="Projects"
							toggle={handleClick}
						/>
						<CustomMobileLink
							href="/articles"
							title="Articles"
							toggle={handleClick}
						/>
					</nav>
					<nav className="flex flex-wrap items-center justify-center gap-6 mt-2 sm:gap-2">
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
							className="w-6 rounded-full bg-light dark:bg-dark"
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

						<button
							onClick={() => setMode(mode === "light" ? "dark" : "light")}
							className={`flex items-center justify-center p-1 ml-3 rounded-full ${
								mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
							}`}
						>
							{mode === "dark" ? (
								<SunIcon className={"fill-dark"} />
							) : (
								<MoonIcon className={"fill-dark"} />
							)}
						</button>
					</nav>
				</motion.div>
			) : null}
			<div className="absolute left-[50%] -translate-x-1/2">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
