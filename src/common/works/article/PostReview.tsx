"use client";

import { AiFillHeart } from "react-icons/ai";
import { HiCheckBadge } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { Field, Form, Formik, FormikProps } from "formik";
import { reviewFormSchema } from "@/lib/validation";
import Input from "@/common/elements/Input";
import { newReview } from "@/lib/strapi";
import { useRouter } from "next/navigation";

export default function PostReview({
  data,
  article,
}: {
  data: any;
  article: number;
}) {
  const initialValues = {
    author: data,
    rating: null,
    message: "",
    article,
  };
  const router = useRouter();
  return (
    <div className="mt-10">
      <Formik
        initialValues={initialValues}
        validationSchema={reviewFormSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          newReview(values);
          resetForm();
        }}
      >
        {({ isSubmitting, isValid, dirty }: FormikProps<any>) => (
          <Form>
            <div className="flex flex-col">
              <div className="flex ml-14 items-center gap-5">
                {" "}
                <div className="flex items-center gap-2">
                  <AiFillHeart className="text-red-400 w-5 h-auto" />
                  <Field
                    name="rating"
                    type="checkbox"
                    value="love"
                    className="h-4 w-4 rounded border-gray-300 text-variation focus:ring-variation"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckBadge className="text-green-400 w-5 h-auto" />
                  <Field
                    name="rating"
                    type="checkbox"
                    value="interesting"
                    className="h-4 w-4 rounded border-gray-300 text-variation focus:ring-variation"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0 mt-4">
                  <FaUserCheck className="w-8 h-auto text-primary" />
                </div>
                <div className="flex flex-col w-full">
                  <Input
                    label="message"
                    component="textarea"
                    rows={5}
                    placeholder="Enter your message..."
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!(isValid && dirty) || isSubmitting}
                      className="w-20 rounded-md bg-variation px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-variation/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-variation mt-2"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
