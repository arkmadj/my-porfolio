import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
	return (
		<article className="flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light">
			<Link
				href={link}
				target="_blank"
				className="w-1/2 overflow-hidden rounded-lg cursor-pointer"
			>
				<Image src={img} alt={title} className="w-full h-auto" />
			</Link>
			<div className="flex flex-col items-start justify-between w-1/2 pl-6">
				<span className="text-xl font-medium text-primary">{type}</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="w-full my-2 text-4xl font-bold text-left">{title}</h2>
				</Link>
				<p className="my-2 font-medium text-dark">{summary}</p>
				<div className="flex items-center mt-2">
					<Link href={github} target="_blank" className="w-10">
						<GithubIcon />
					</Link>
					<Link
						href={link}
						target="_blank"
						className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
					>
						Visit the project
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({ title, type, img, link, github }) => {
	return (
		<article>
			<Link
				href={link}
				target="_blank"
				className="w-full overflow-hidden rounded-lg cursor-pointer"
			>
				<Image src={img} alt={title} className="w-full h-auto" />
			</Link>
			<div className="flex flex-col items-start justify-between w-full pl-6">
				<span className="text-xl font-medium text-primary">{type}</span>
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2"
				>
					<h2 className="w-full my-2 text-4xl font-bold text-left">{title}</h2>
				</Link>
				<p className="my-2 font-medium text-dark">{summary}</p>
				<div className="flex items-center mt-2">
					<Link href={github} target="_blank" className="w-10">
						<GithubIcon />
					</Link>
					<Link
						href={link}
						target="_blank"
						className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
					>
						Visit
					</Link>
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
		<>
			<Head>
				<title>Zultan | Projects page</title>
				<meta name="description" content="About me" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full mb-16">
				<Layout className="pt-6">
					<AnimatedText
						text="Imagination Trumps Knowledge!"
						className="mb-16"
					/>
					<div className="grid grid-cols-12 gap-24">
						<div className="col-span-12">
							<FeaturedProject
								title="Crypto Screener Application"
								summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
								link="/"
								type="Featured Project"
								img={project1}
								github="/"
							/>
						</div>
						<div className="col-span-6">Project-1</div>
						<div className="col-span-6">Project-2</div>
						<div className="col-span-12">Featured Project</div>
						<div className="col-span-6">Project-3</div>
						<div className="col-span-6">Project-4</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
