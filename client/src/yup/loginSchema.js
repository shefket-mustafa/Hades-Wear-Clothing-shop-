import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(4, "Password must be at least 4 characters!").required("Password is required!")
})