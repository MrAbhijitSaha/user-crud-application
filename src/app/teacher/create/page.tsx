import CreateTeacherForm from "@/components/Forms/CreateTeacherForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Teacher Create | User CRUD App",
	description: "Teacher creation page of User CRUD Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="max-w-md">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Create Teacher
					</CardTitle>
				</CardHeader>

				<CardContent className="space-y-4">
					<CreateTeacherForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
