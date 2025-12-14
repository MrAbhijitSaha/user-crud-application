import UpdateStudentForm from "@/components/Forms/UpdateStudentForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import prisma from "@/lib/database/dbClient";

type PagePropsType = {
	params: Promise<{ stuid: string }>;
};

const page = async ({ params }: PagePropsType) => {
	const { stuid } = await params;

	const tData = await prisma.teacher.findMany();

	const stuData = await prisma.student.findFirstOrThrow({
		where: {
			id: stuid,
		},
	});

	return (
		<section className="grid place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Update Student
					</CardTitle>
				</CardHeader>

				<CardContent>
					<UpdateStudentForm
						stuInfo={stuData}
						tData={tData}
					/>
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
