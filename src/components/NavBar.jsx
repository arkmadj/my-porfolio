import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
	return (
		<header className="flex items-center justify-between w-full px-32 py-8 font-medium">
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/articles">Articles</Link>
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
