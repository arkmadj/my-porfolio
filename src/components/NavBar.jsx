import Link from "next/link";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span className="h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300">
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
			<nav>
				<Link href="/" target={"_blank"}>
					T
				</Link>
				<Link href="/about" target={"_blank"}>
					T
				</Link>
				<Link href="/projects" target={"_blank"}>
					T
				</Link>
				<Link href="/articles" target={"_blank"}>
					T
				</Link>
				<Link href="/articles" target={"_blank"}>
					T
				</Link>
				<Link href="/articles" target={"_blank"}>
					T
				</Link>
			</nav>
			<div className="absolute left-[50%] -translate-x-1/2">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
