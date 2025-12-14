import { StudentFormType } from "@/lib/zodSchema";
import { MarsIcon, TransgenderIcon, VenusIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../shadcnui/avatar";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../shadcnui/card";

type DisplayStudentCardProps = {
	data: StudentFormType;
};

const DisplayStudentCard = ({ data }: DisplayStudentCardProps) => {
	console.log(data);

	const initials = `${data.firstName[0]}${data.lastName[0]}`;

	return (
		<Card className="w-full">
			{/* Header */}
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar className="h-12 w-12">
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>

				<div className="flex-1">
					<CardTitle className="text-lg">
						{data.firstName} {data.lastName}
					</CardTitle>
					<div className="text-muted-foreground flex items-center gap-2 text-sm">
						<Badge variant="outline">
							{data.gender === "male" ? (
								<MarsIcon />
							) : data.gender === "female" ? (
								<VenusIcon />
							) : (
								<TransgenderIcon />
							)}
						</Badge>
						<span className="capitalize">{data.gender}</span>
					</div>
				</div>
			</CardHeader>

			{/* Content */}
			<CardContent className="space-y-2 text-sm">
				<div>
					<span className="font-medium">Email: </span>
					<span className="text-muted-foreground">{data.email}</span>
				</div>

				<div>
					<span className="font-medium">Teacher: </span>
					<span className="text-muted-foreground">
						{/* {data.teacher.firstName} {data.teacher.lastName} */}
						{data.teacherId}
					</span>
				</div>
			</CardContent>

			{/* Actions */}
			<CardFooter className="flex justify-end gap-2">
				<Button
					variant="outline"
					size="sm">
					Edit
				</Button>
				<Button
					variant="destructive"
					size="sm">
					Delete
				</Button>
			</CardFooter>
		</Card>
	);
};

export default DisplayStudentCard;
