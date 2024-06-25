import * as yup from "yup"

export let signupSchema = yup.object({
    name: yup.string().min(3).max(25).required("name field required") ,
    email: yup.string().email().required("email field required"),
    password :yup
    .string()
    .required('Please Enter your password')
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
})