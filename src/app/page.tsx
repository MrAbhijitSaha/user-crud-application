import DisplayStudentCard from "@/components/Card/DisplayStudentCard";
import displayStudentAction from "@/server/displayStudentAction";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js Starter Fullstack",
	description: "Production grade Fullstack Next.js starter template",
};

const page = async () => {
	const allStudentData = await displayStudentAction();

	return (
		<section className="grid grid-cols-1 gap-4 md:grid-cols-3">
			{allStudentData.map((data) => (
				<DisplayStudentCard
					key={data.id}
					data={data}
				/>
			))}
		</section>
	);
};

export default page;
