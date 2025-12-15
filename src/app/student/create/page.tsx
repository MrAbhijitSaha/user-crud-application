import CreateStudentForm from "@/components/Forms/CreateStudentForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Student Create | User CRUD App",
	description: "Student creation page of User CRUD Application",
};

const page = async () => {
	const tData = await prisma.teacher.findMany();

	return (
		<section className="grid place-items-center">
			<Card className="max-w-md">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Create Student
					</CardTitle>
				</CardHeader>

				<CardContent>
					<CreateStudentForm tData={tData} />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
