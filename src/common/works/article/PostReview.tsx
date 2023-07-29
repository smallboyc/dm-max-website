"use client";
import { Fragment, useState } from "react";
import { FaceSmileIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { AiFillHeart, AiOutlineLike } from "react-icons/ai";
import { HiCheckBadge } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { Form, Formik, FormikProps } from "formik";
import { reviewFormSchema } from "@/lib/validation";
import Input from "@/common/elements/Input";
import { newReview } from "@/lib/strapi";

const moods = [
  {
    name: "Love it",
    value: "love it",
    icon: AiFillHeart,
    iconColor: "text-white",
    bgColor: "bg-red-400",
  },
  {
    name: "Very good",
    value: "very good",
    icon: AiOutlineLike,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Great",
    value: "great",
    icon: HiCheckBadge,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIcon,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

export default function PostReview({
  data,
  article,
  params,
}: {
  data: any;
  article : number;
  params: { article: string };
}) {
  const [selected, setSelected] = useState(moods[2]);
  const initialValues = {
    author: data,
    rating: selected.value,
    message: "",
    article,
  };

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
            <div className="flex flex-col gap-y-2">
              <div className="flex ml-14">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative">
                        <Listbox.Button>
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span>
                                <FaceSmileIcon
                                  className="h-6 w-6 flex-shrink-0 text-gray-500"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={classNames(
                                    selected.bgColor,
                                    "flex h-7 w-7 items-center justify-center rounded-full"
                                  )}
                                >
                                  <selected.icon
                                    className="h-4 w-4 flex-shrink-0 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map((mood) => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  classNames(
                                    active ? "bg-gray-100" : "bg-white",
                                    "relative cursor-default select-none px-3 py-2"
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={classNames(
                                      mood.bgColor,
                                      "flex h-7 w-7 items-center justify-center rounded-full"
                                    )}
                                  >
                                    <mood.icon
                                      className={classNames(
                                        mood.iconColor,
                                        "h-4 w-4 flex-shrink-0"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="ml-3 block truncate font-medium">
                                    {mood.name}
                                  </span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
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
