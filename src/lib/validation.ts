import * as Yup from "yup";

const required = "Champs obligatoire";

const { firstname, lastname, email, message } = {
  firstname: Yup.string()
    .max(15, "Doit au maximum contenir 15 caractères")
    .min(2, "Doit au minimum contenir 2 caractères")
    .required(required),
  lastname: Yup.string()
    .max(15, "Doit au maximum contenir 15 caractères")
    .min(2, "Doit au minimum contenir 2 caractères")
    .required(required),
  email: Yup.string().email("Adresse e-mail non-valide").required(required),
  message: Yup.string()
    .min(10, "Doit au minimum contenir 10 caractères")
    .required(required),
};

export const formSchema = Yup.object({ firstname, lastname, email, message });
