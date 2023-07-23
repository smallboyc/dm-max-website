import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyle } from "./toast";

export const registerToNewsletter = (data: any) => {
  axios.post(`/api/sendgrid/newsletter`, data);
  toast.success("Welcome to newsletter", toastStyle);
};

export const sendMail = (data: any) => {
  axios.post(`/api/sendgrid/mail`, data);
  toast.success("Mail sent !", toastStyle);
};
