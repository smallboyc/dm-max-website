import * as Yup from "yup";
const required = "required_field";

const { firstname, lastname, email, message } = {
  firstname: Yup.string().max(15, "max_15").min(2, "min_2").required(required),
  lastname: Yup.string().max(15, "max_15").min(2, "min_2").required(required),
  email: Yup.string().email("invalid_email").required(required),
  message: Yup.string().min(10, "min_10").required(required),
};

export const formSchema = Yup.object({ firstname, lastname, email, message });
