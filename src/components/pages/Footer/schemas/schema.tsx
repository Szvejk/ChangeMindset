import * as yup from "yup"



export const basicSchema = yup.object().shape({
    email:yup.string().email("Please enter a valid email").required("Required"),
    // name:yup.string()("Please enter a valid name").required("Required"),
    message:yup.string().min(5).required("Required")
    
})