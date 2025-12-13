import z from "zod";

export const teacherFormSchema = z.object({
	firstName: z.string().min(2, "First Name must be more that 2 characters!"),
	lastName: z.string().min(3, "Last Name must be more that 3 characters!"),
});

export const studentFormSchema = z.object({
	firstName: z.string().min(2, "First Name must be more that 2 characters!"),
	lastName: z.string().min(3, "Last Name must be more that 3 characters!"),
	gender: z.string().min(4, "Select Your Gender"),
	email: z.email("Invalid Email Address"),
	teacherId: z.string().min(1, "Select Your Teacher"),
});

export type TeacherFormType = z.infer<typeof teacherFormSchema>;

export type StudentFormType = z.infer<typeof studentFormSchema>;
