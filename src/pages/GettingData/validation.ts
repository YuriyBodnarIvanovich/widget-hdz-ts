import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required").min(2, "Please enter a name more than 1 character"),
  telefon: Yup.string().required("telefon is required"),
  email: Yup.string().required("Email is required").email("Enter a valid email"),
});
