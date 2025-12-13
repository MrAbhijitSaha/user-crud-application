import { studentFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateStudentForm = () => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
		setValue,
		clearErrors,
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


    const createStudentFormSubmitHandle = () =>{
        
    }

	return <>
    
<form>

</form>

    </>;
};

export default CreateStudentForm;
