import z from "zod";

export const teacherFormSchema = z.object({
	firstName: z.string().min(2, "First Name must be more that 2 characters!"),
	lastName: z.string().min(3, "Last Name must be more that 3 characters!"),
});

export const studentFormSchema = z.object({
	firstName: z.string().min(2, "First Name must be more that 2 characters!"),
	lastName: z.string().min(3, "Last Name must be more that 3 characters!"),
	gender: z.string({ error: "Select Your Gender" }),
	email: z.email({ error: "Invalid Email Address" }),
	teacherId: z.string(),
});

export type TeacherFormType = z.infer<typeof teacherFormSchema>;

export type StudentFormType = z.infer<typeof studentFormSchema>;
