"use client";

import { studentFormSchema, StudentFormType } from "@/lib/zodSchema";
import createStudentAction from "@/server/createStudentAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Teacher } from "../../../generated/prisma/client";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../shadcnui/select";

type CreateStudentFormProps = {
	tData: Teacher[];
};

const CreateStudentForm = ({ tData }: CreateStudentFormProps) => {
	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		setValue,
		clearErrors,
		reset,
	} = useForm({
		resolver: zodResolver(studentFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			gender: "",
			email: "",
			teacherId: "",
		},
		mode: "all",
	});

	const createStudentFormSubmitHandle = async (fData: StudentFormType) => {
		await new Promise<void>((r) => setTimeout(r, 1500));

		const { isSuccess, message } = await createStudentAction(fData);

		if (isSuccess) {
			toast.success(message);
			reset();
		} else {
			toast.error(message);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(createStudentFormSubmitHandle)}
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

				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Email</FieldLabel>
							<Input
								{...field}
								id={field.name}
								aria-invalid={fieldState.invalid}
								placeholder="Enter your email"
								autoComplete="email"
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>

				<Controller
					name="gender"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Gender</FieldLabel>
							<Select
								name={field.name}
								value={field.value}
								onValueChange={field.onChange}>
								<SelectTrigger
									id={field.name}
									aria-invalid={fieldState.invalid}>
									<SelectValue placeholder="Select Gender" />
								</SelectTrigger>

								<SelectContent position="item-aligned">
									<SelectItem value={"male"}>Male</SelectItem>
									<SelectItem value={"female"}>Female</SelectItem>
									<SelectItem value={"others"}>Others</SelectItem>
								</SelectContent>
							</Select>
						</Field>
					)}
				/>

				<Controller
					name="teacherId"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Teacher</FieldLabel>
							<Select
								name={field.name}
								value={field.value}
								onValueChange={field.onChange}>
								<SelectTrigger
									id={field.name}
									aria-invalid={fieldState.invalid}>
									<SelectValue placeholder="Select Your Teacher" />
								</SelectTrigger>

								<SelectContent position="item-aligned">
									{tData.map(({ id, firstName, lastName }) => (
										<SelectItem
											key={id}
											value={id}>
											{firstName} {lastName}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
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
		</>
	);
};

export default CreateStudentForm;
