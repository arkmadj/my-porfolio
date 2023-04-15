import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";

const FeaturedArticle = ({ img, title, time, summary, link }) => {
	return (
		<li className="w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl">
			<Link
				href={link}
				target="_blank"
				className="w-full overflow-hidden rounded-lg cursor-pointer"
			>
				<Image src={img} alt={title} className="w-full h-auto" />
			</Link>
			<Link href={link} target="_blank">
				<h2 className="my-2 text-2xl font-bold capitalize hover:underline">{title}</h2>
			</Link>
			<p className="mb-2 text-sm">{summary}</p>
			<span className="font-semibold text-primary">{time}</span>
		</li>
	);
};

const articles = () => {
	return (
		<>
			<Head>
				<title>Zultan | Articles page</title>
				<meta name="description" content="About me" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
				<Layout className="pt-16">
					<AnimatedText className="mb-16" text="Words Can Change The World! " />
					<ul className="grid grid-cols-2 gap-16">
						<FeaturedArticle
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time="9 min read"
							link="/"
							img={article1}
						/>
						<FeaturedArticle
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
							time="9 min read"
							link="/"
							img={article1}
						/>
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
