import * as yup from "yup";

export const registerSchema = yup.object().shape({
    email: yup.string().max(50, "Email is too long!").email("Invalid email").required("Email is required"),
    password: yup.string().min(4, "Password must be at least 4 characters!").required("Password is required!"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords do not match!").required("Password confirmation is required!")
})