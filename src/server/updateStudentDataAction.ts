"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";
import { Student } from "../../generated/prisma/client";

// type updateStudentDataAction

const updateStudentDataAction = async ({
	firstName,
	lastName,
	email,
	gender,
	teacherId,
	id,
}: Student) => {
	try {
		await prisma.student.update({
			where: {
				id: id,
			},
			data: {
				firstName,
				lastName,
				email,
				gender,
				teacherId,
			},
		});

		revalidatePath("/update/[stuid]");

		return {
			isSuccess: true,
			message: "Student Details Update Successfully",
		};
	} catch (error) {
		console.error(error);

		return {
			isSuccess: false,
			message: "Updation process failed !!",
		};
	}
};

export default updateStudentDataAction;
