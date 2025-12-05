import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Student Create | User CRUD App",
	description: "Student creation page of User CRUD Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Create Student
					</CardTitle>
				</CardHeader>

				<CardContent></CardContent>
			</Card>
		</section>
	);
};

export default page;
