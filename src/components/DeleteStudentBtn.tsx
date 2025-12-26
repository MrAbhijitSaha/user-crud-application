"use client";

import deleteStudentAction from "@/server/deleteStudentAction";
import { DialogClose } from "@radix-ui/react-dialog";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./shadcnui/dialog";

type DeleteStudentBtnProps = {
	id: string;
};

const DeleteStudentBtn = ({ id }: DeleteStudentBtnProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleDelete = async () => {
		setIsLoading(true);

		const { isSuccess, message } = await deleteStudentAction(id);

		setIsLoading(false);

		if (isSuccess) {
			toast.success(message);
		} else {
			toast.error(message);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive">Delete</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						Once you delete this, it cannot be undone.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button
						variant="destructive"
						onClick={handleDelete}
						disabled={isLoading}>
						{isLoading ? (
							<>
								<LoaderIcon className="animate-spin" /> Deleting...
							</>
						) : (
							"Delete"
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteStudentBtn;
