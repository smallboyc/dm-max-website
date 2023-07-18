import * as Yup from "yup";

const required = "* required fields.";

const { firstname, lastname, email, message } = {
  firstname: Yup.string()
    .max(15, "* must contain a maximum of 15 characters.")
    .min(2, "* must contain at least 2 characters.")
    .required(required),
  lastname: Yup.string()
    .max(15, "* must contain a maximum of 15 characters.")
    .min(2, "* must contain at least 2 characters.")
    .required(required),
  email: Yup.string().email("* email address invalid.").required(required),
  message: Yup.string()
    .min(10, "* must contain at least 10 characters.")
    .required(required),
};

export const formSchema = Yup.object({ firstname, lastname, email, message });
