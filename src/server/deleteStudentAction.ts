"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const deleteStudentAction = async (id: string) => {
	try {
		await prisma.student.delete({
			where: {
				id: id,
			},
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Student Details Deleted Successfully",
		};
	} catch (error) {
		console.error(error);

		return {
			isSuccess: false,
			message: "Failed to Delete Student Details",
		};
	}
};

export default deleteStudentAction;
