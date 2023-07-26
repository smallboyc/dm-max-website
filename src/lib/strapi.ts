import axios from "axios";
import { toastStyle } from "./toast";
import { toast } from "react-toastify";



export async function getData(path: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
}

export async function newSubscriber({ firstname, email, password }: any) {
  axios
    .post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`, {
      username: firstname,
      email,
      password,
    })
    .then(() => {
      toast.success("Welcome to works!", toastStyle);
    })
    .catch(() => {
      toast.error("Something went wrong...", toastStyle);
    });
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log(email, password);
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
    {
      identifier: email,
      password,
    }
  );
  return res.data;
}
