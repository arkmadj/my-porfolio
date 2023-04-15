import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const articles = () => {
	return (
		<>
			<Head>
				<title>Zultan | Articles page</title>
				<meta name="description" content="About me" />
			</Head>
			<main>
				<Layout>
					<AnimatedText text="Words Can Change The World! " />
				</Layout>
			</main>
		</>
	);
};

export default articles;
