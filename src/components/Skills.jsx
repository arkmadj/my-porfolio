import { motion } from "framer-motion";



const Skills = () => {
	return (
		<>
			<h2 className="w-full mt-64 font-bold text-center text-8xl">Skills</h2>
			<div className="relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight">
				<motion.div
					className="flex items-center justify-center p-8 font-semibold rounded-full bg-dark shadow-dark text-light"
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>
			</div>
		</>
	);
};

export default Skills;
