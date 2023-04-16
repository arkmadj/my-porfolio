import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="flex flex-col items-center justify-between w-[60%] mx-auto"
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className="text-2xl font-bold capitalize">
					{position}&nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="capitalize text-primary dark:text-primaryDark"
					>
						@{company}
					</a>
				</h3>
				<span className="font-medium capitalize text-dark/75 dark:text-light/75">
					{time} | {address}
				</span>
				<p className="w-full font-medium">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div className="my-64">
			<h2 className="w-full mb-32 font-bold text-center text-8xl">
				Experience
			</h2>
			<div ref={ref} className="w-[75%] mx-auto relative">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
				/>
				<ul className="flex flex-col items-start justify-between w-full gap-8 ml-4">
					<Details
						position="Software Engineer"
						company="Google"
						companyLink="www.google.com"
						time="2022-Present"
						address="Mountain View, CA"
						work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
					/>
					<Details
						position="Software Engineer"
						company="Google"
						companyLink="www.google.com"
						time="2022-Present"
						address="Mountain View, CA"
						work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
					/>
					<Details
						position="Software Engineer"
						company="Google"
						companyLink="www.google.com"
						time="2022-Present"
						address="Mountain View, CA"
						work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
					/>
					<Details
						position="Software Engineer"
						company="Google"
						companyLink="www.google.com"
						time="2022-Present"
						address="Mountain View, CA"
						work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
					/>
					<Details
						position="Software Engineer"
						company="Google"
						companyLink="www.google.com"
						time="2022-Present"
						address="Mountain View, CA"
						work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
