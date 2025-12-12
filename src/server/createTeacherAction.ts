"use server";

import prisma from "@/lib/database/dbClient";
import { TeacherFormType } from "@/lib/zodSchema";
import { revalidatePath } from "next/cache";

const createTeacherAction = async (ctFormData: TeacherFormType) => {
	try {
		await prisma.teacher.create({
			data: ctFormData,
		});

		revalidatePath("/student/create");

		return {
			isSuccess: true,
			message: "Teacher created successfully",
		};
	} catch (error) {
		console.error(error);

		return {
			isSuccess: false,
			message: "Teacher creation failed",
		};
	}
};

export default createTeacherAction;
