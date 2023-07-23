"use client";
import { Text } from "@/common/typography";
import { joinFormSchema } from "@/lib/validation";
import { Form, Formik, FormikProps } from "formik";
import Input from "@/common/elements/Input";
import { registerToNewsletter } from "@/lib/sendgrid";
import { newSubscriber } from "@/lib/strapi";
import { useTranslations } from "next-intl";
import { CheckIcon } from "@heroicons/react/20/solid";

const get = [
  {
    id: 1,
    content: "get_1",
  },
  {
    id: 2,
    content: "get_2",
  },
  {
    id: 3,
    content: "get_3",
  },
];

interface formValues {
  firstname: string;
  email: string;
  password: string;
}

const initialValues: formValues = {
  firstname: "",
  email: "",
  password: "",
};

export default function Join() {
  const t = useTranslations("join");
  return (
    <div className="bg-primary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex flex-col items-center lg:grid max-w-7xl grid-cols-1 gap-20 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-2xl tracking-tight text-white lg:col-span-7">
          <Text size={Text.size.XXXLARGE} weight={Text.weight.BOLD}>
            {t("title")}
            <span className="text-variation">works</span>?
          </Text>
          <div className="mt-2">
            <Text size={Text.size.XXLARGE} weight={Text.weight.BOLD}>
              {t("subtitle")} :
            </Text>
          </div>
          <div className="mt-5">
            <div className="flow-root">
              <ul role="list" className="-mb-8">
                {get.map((event, eventIdx) => (
                  <li key={event.id}>
                    <div className="relative pb-8">
                      {eventIdx !== get.length - 1 ? (
                        <span
                          className="absolute left-2 top-4 h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3 items-center">
                        <div>
                          <span className="h-5 w-5 bg-variation rounded-full flex items-center justify-center ring-8 ring-primary">
                            <CheckIcon
                              className="h-3 w-3 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <Text>{t(event.content)}</Text>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm sm:max-w-md lg:col-span-5 lg:pt-2 flex flex-col justify-center">
          <Formik
            initialValues={initialValues}
            validationSchema={joinFormSchema}
            onSubmit={(values, { resetForm }) => {
              registerToNewsletter(values);
              newSubscriber(values);
              console.log(values);
              resetForm();
            }}
          >
            {({ isSubmitting, isValid, dirty }: FormikProps<any>) => (
              <Form>
                <div className="flex flex-col gap-y-4">
                  <Input
                    variation
                    label="email"
                    type="email"
                    placeholder={t("email")}
                  />
                  <Input
                    variation
                    label="firstname"
                    type="text"
                    placeholder={t("username")}
                  />
                  <Input
                    variation
                    label="password"
                    type="password"
                    placeholder={t("password")}
                  />
                  <button
                    type="submit"
                    disabled={!(isValid && dirty) || isSubmitting}
                    className="flex-none w-full rounded-md bg-variation px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-variation/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-variation mt-2"
                  >
                    {t("button")}
                  </button>
                  <p className="text-sm leading-6 text-gray-300">
                    We care about your data. Read our{" "}
                    <a href="#" className="font-semibold text-white">
                      privacy&nbsp;policy
                    </a>
                    .
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
