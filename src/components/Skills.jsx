import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full bg-dark shadow-dark text-light"
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x, y }}
			transition={{ duration: 1.5 }}
			viewport={{once: true}}
		>
			{name}
		</motion.div>
	);
};

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
				<Skill name="Vue" x="-25vw" y="2vw" />
				<Skill name="ReactJS" x="-5vw" y="-10vw" />
				<Skill name="NextJS" x="20vw" y="6vw" />
				<Skill name="Go" x="0vw" y="12vw" />
				<Skill name="Python" x="-20vw" y="-15vw" />
				<Skill name="Typescript" x="15vw" y="-12vw" />
				<Skill name="NestJS" x="32vw" y="-5vw" />
				<Skill name="AdonisJS" x="0vw" y="-20vw" />
				<Skill name="Quasar" x="-25vw" y="18vw" />
				<Skill name="Tailwind CSS" x="18vw" y="18vw" />
			</div>
		</>
	);
};

export default Skills;
