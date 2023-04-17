import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="flex flex-col items-center justify-between w-[60%] mx-auto md:w-[80%]"
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">{type}</h3>
				<span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
					{time} | {place}
				</span>
				<p className="w-full font-medium md:text-sm">{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div className="my-64">
			<h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">Education</h2>
			<div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs-left-[20px]"
				/>
				<ul className="flex flex-col items-start justify-between w-full gap-8 ml-4 xs:ml-2">
					<Details
						type="Bachelor Of Science In Computer Science"
						time="2016-2020"
						palce="Massachusetts Institute Of Technology (MIT)"
						info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
					/>
					<Details
						type="Bachelor Of Science In Computer Science"
						time="2016-2020"
						palce="Massachusetts Institute Of Technology (MIT)"
						info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
					/>
					<Details
						type="Bachelor Of Science In Computer Science"
						time="2016-2020"
						palce="Massachusetts Institute Of Technology (MIT)"
						info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
