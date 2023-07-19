"use client";
import { Title, Text } from "@/common/typography";
import { Field, Form, Formik, FormikProps } from "formik";
import { formSchema } from "@/lib/validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Input from "@/common/elements/Input";
interface formValues {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  news: boolean;
}

const toastStyle: any = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export default function Contact() {
  const registerToNewsletter = (data: any) => {
    axios.post(`/api/sendgrid/newsletter`, data);
    toast.success("Welcome to newsletter", toastStyle);
  };

  const sendMail = (data: any) => {
    axios.post(`/api/sendgrid/mail`, data);
    toast.success("Mail sent !", toastStyle);
  };

  const initialValues: formValues = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    news: false,
  };

  return (
    <div className="isolate bg-slate-100/50 p-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center gap-5">
          <Title
            size={Title.size.LARGE}
            color={Title.color.VARIATION}
            weight={Title.weight.BOLD}
          >
            contact
          </Title>
          <Text
            align={Text.align.CENTER}
            size={Text.size.LARGE}
            color={Text.color.GRAY}
            italic
          >
            Need a service or you want to follow my works? No problem!
          </Text>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={(values, { resetForm }) => {
            values.news && registerToNewsletter(values);
            sendMail(values);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, dirty }: FormikProps<any>) => (
            <Form>
              <div className="grid gap-x-8 gap-y-6 grid-cols-2">
                <Input name="First Name" label="firstname" type="text" />
                <Input name="Last Name" label="lastname" type="text" />
                <div className="col-span-2">
                  <Input name="Email" label="email" type="email" />
                </div>
                <div className="col-span-2">
                  <Input
                    name="Message"
                    label="message"
                    component="textarea"
                    rows={4}
                  />
                </div>

                <div className="relative flex items-start col-span-2">
                  <div className="flex h-6 items-center">
                    <Field
                      name="news"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-variation focus:ring-variation"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Check this
                    </label>{" "}
                    <span className="text-gray-500">
                      if you want to receive{" "}
                      <span className="text-variation">latest news</span> about
                      my works.
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={!(isValid && dirty) || isSubmitting}
                  className="block w-full rounded-md bg-variation px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-variation/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-variation"
                >
                  Let&apos;s talk
                </button>
                <ToastContainer className="absolute block z-50" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
