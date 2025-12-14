"use server";

import prisma from "@/lib/database/dbClient";

const displayStudentAction = async () => {
	return await prisma.student.findMany({
		include: {
			teacher: true,
		},
	});
};

export default displayStudentAction;
