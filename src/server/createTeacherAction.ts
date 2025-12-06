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
			issuccess: true,
			message: "Teacher created successfully",
		};
	} catch (error) {
		console.log(error);

		return {
			issuccess: false,
			message: "Teacher creation faild",
		};
	}
};

export default createTeacherAction;
