import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
	return (
		<li className="flex flex-col items-center justify-between w-[60%] mx-auto">
			<div>
				<h3 className="text-2xl font-bold capitalize">
					{position}&nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="capitalize text-primary"
					>
						@{company}
					</a>
				</h3>
				<span className="font-medium capitalize text-dark/75">
					{time} | {address}
				</span>
				<p className="w-full font-medium">{work}</p>
			</div>
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
				<motion.div style={{scaleY: scrollYProgress}} className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />
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
