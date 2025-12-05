"use client";

import { teacherFormSchema, TeacherFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const CreateTeacherForm = () => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(teacherFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
		},
		mode: "all",
	});

	const createTeacherFormSubmitHandle = async (ctFormData: TeacherFormType) => {
		await new Promise<void>((r) => setTimeout(r, 1500));

		console.log("====================================");
		console.log(ctFormData);
		console.log("====================================");
	};

	return (
		<form
			onSubmit={handleSubmit(createTeacherFormSubmitHandle)}
			className="grid grid-cols-1 gap-8"
			noValidate>
			<Controller
				name="firstName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>First Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your first name"
							autoComplete="given-name"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="lastName"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Last Name</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your last name"
							autoComplete="family-name"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				className="cursor-pointer"
				type="submit"
				disabled={isSubmitting}>
				{isSubmitting ? (
					<>
						<Loader2Icon className="animate-spin" /> Submitting..
					</>
				) : (
					<>
						<SendIcon /> Submit
					</>
				)}
			</Button>
		</form>
	);
};

export default CreateTeacherForm;
