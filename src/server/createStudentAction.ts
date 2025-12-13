"use server";
import prisma from "@/lib/database/dbClient";
import { StudentFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createStudentAction = async (fData: StudentFormType) => {
	try {
		await prisma.student.create({
			data: fData,
		});

		revalidatePath("/");

		return {
			isSuccess: true,
			message: "Student created successfully",
		};
	} catch (error) {
		console.error(error);

		return {
			isSuccess: false,
			message: "Student creation failed",
		};
	}
};

export default createStudentAction;
