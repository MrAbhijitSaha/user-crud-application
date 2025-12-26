"use client";

import { teacherFormSchema, TeacherFormType } from "@/lib/zodSchema";
import createTeacherAction from "@/server/createTeacherAction";
import { faker } from "@faker-js/faker/locale/en_IN";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon, SparklesIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const CreateTeacherForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
		setValue,
		clearErrors,
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

		const { isSuccess, message } = await createTeacherAction(ctFormData);

		if (isSuccess) {
			toast.success(message);
			reset();
		} else {
			toast.error(message);
		}
	};

	const teacherDetailsGenerator = async () => {
		setIsLoading(true);

		await new Promise<void>((r) => setTimeout(r, 1500));

		const { person } = faker;

		setValue("firstName", person.firstName());
		setValue("lastName", person.lastName());

		clearErrors();

		setIsLoading(false);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(createTeacherFormSubmitHandle)}
				className="grid grid-cols-1 gap-4"
				noValidate>
				<div className="flex gap-2">
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
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
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
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</div>

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

			<Button
				className="w-full cursor-pointer"
				onClick={teacherDetailsGenerator}
				type="button"
				disabled={isLoading}>
				{isLoading ? (
					<>
						<Loader2Icon className="animate-spin" /> Generating..
					</>
				) : (
					<>
						<SparklesIcon /> Generate
					</>
				)}
			</Button>
		</>
	);
};

export default CreateTeacherForm;
