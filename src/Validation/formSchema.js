import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required("Name field is required."),
    email: yup.string().required("Email field is required."),
    password: yup.string().required("Password field is required.").min(6, "Password must be at least 6 characters."),
    termsOfService: yup.boolean().oneOf([true], "You must agree to Terms of Service")
})

// let schema = yup.object().shape({//Define each key, what is expected, and the error to be thrown if expectation is not met
//     name: yup.string().required("Name field is required."),
//     email: yup.string().required("Email field is required."),
//     password: yup.string().required("Password field is required.").min(6, "Password must be at least 6 characters."),
//     termsOfService: yup.boolean().oneOf([true], "You must agree to Terms of Service")
//   })