import prisma from "../dbClient";

const getAllStudents = async (withTeacher: boolean) => {
	try {
		if (withTeacher) {
			const data = await prisma.student.findMany({
				include: {
					teacher: true,
				},
			});
			return {
				isSuccess: true,
				data,
			};
		} else {
			const data = await prisma.student.findMany();
			return {
				isSuccess: true,
				data,
			};
		}
	} catch (error) {
		console.error(error);
		return {
			isSuccess: false,
			data: null,
		};
	}
};

export default getAllStudents;
