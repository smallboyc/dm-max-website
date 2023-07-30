"use client";
import { AiFillHeart } from "react-icons/ai";
import { HiCheckBadge } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import PostReview from "./PostReview";
import { useState } from "react";
import Link from "next/link";
import { Form, Formik, FormikProps } from "formik";
import Input from "@/common/elements/Input";
import { signinFormSchema } from "@/lib/validation";
import axios from "axios";
import { toast } from "react-toastify";
import { toastStyle } from "@/lib/toast";
import Rating from "./Rating";
import { BsTypeH1 } from "react-icons/bs";

const icons = [
  { rating: "love", icon: AiFillHeart, color: "text-red-400" },
  { rating: "interesting", icon: HiCheckBadge, color: "text-green-400" },
];

const numberOfReviews = (data: any, params: any) => {
  let nb = 0;
  data.map(
    (el: any) =>
      el.attributes.work.data?.attributes.slug == params.article &&
      el.attributes.reviews.data?.map((review: any) => nb++)
  );
  return nb;
};

interface formValues {
  email: string;
  password: string;
}

const initialValues: formValues = {
  email: "",
  password: "",
};

export default function Reviews({
  data,
  article,
  params,
}: {
  data: any;
  article: number;
  params: { article: string };
}) {
  const [postReview, setPostReview] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="bg-white max-w-container">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Avis des abonnés
          </h2>
          <Rating data={data} params={params} />
          <div className="mt-3 flex items-center">
            <p className="ml-2 text-sm text-gray-900">
              Basé sur {numberOfReviews(data, params)} Avis
            </p>
          </div>

          {!postReview ? (
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Partagez votre avis
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Entrez vos identifiants pour partager votre avis !
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Pas identifié ?{" "}
                <Link href="/#join">
                  <span className="text-variation">Enregistrez-vous</span>
                </Link>
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={signinFormSchema}
                onSubmit={(values, { resetForm }) => {
                  axios
                    .post(
                      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
                      {
                        identifier: values.email,
                        password: values.password,
                      }
                    )
                    .then(({ data }) => {
                      setPostReview(!postReview);
                      setUsername(data.user.username);
                      toast.success(`Salut ${data.user.username}`, toastStyle);
                    })
                    .catch((error) => {
                      toast.error("Une erreur est survenue...", toastStyle);
                    });
                  resetForm();
                }}
              >
                {({ isSubmitting, isValid, dirty }: FormikProps<any>) => (
                  <Form>
                    <div className="flex flex-col gap-y-2">
                      <Input label="email" type="email" placeholder="Email" />
                      <Input
                        label="password"
                        type="password"
                        placeholder="Password"
                      />
                      <button
                        type="submit"
                        disabled={!(isValid && dirty) || isSubmitting}
                        className="flex-none w-full rounded-md bg-variation px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-variation/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-variation mt-2"
                      >
                        Donner son avis
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <h3 className="text-md font-bold text-gray-900 mt-10">
              Identifié en tant que{" "}
              <span className="text-variation">{username}</span>.
            </h3>
          )}
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          {/* Affichage des tous les commentaires de l'article  */}
          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {data.map(
                (el: any) =>
                  el.attributes.work.data?.attributes.slug == params.article &&
                  el.attributes.reviews.data?.map((review: any) => (
                    <>
                      <div key={review.id} className="py-12">
                        <div className="flex items-center">
                          <FaUserCheck className="w-8 h-auto text-primary" />
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900">
                              {review.attributes.author}
                            </div>
                            <div className="mt-1 flex items-center">
                              {" "}
                              {icons.map((el: any) =>
                                review.attributes.rating == el.rating ? (
                                  <>
                                    <el.icon
                                      className={`${el.color} h-5 w-5 flex-shrink-0`}
                                      aria-hidden="true"
                                    />
                                  </>
                                ) : (
                                  review.attributes.rating == "all" && (
                                    <>
                                      <el.icon
                                        className={`${el.color} h-5 w-5 flex-shrink-0`}
                                        aria-hidden="true"
                                      />
                                    </>
                                  )
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div
                          className="mt-4 space-y-6 text-base italic text-gray-600"
                          dangerouslySetInnerHTML={{
                            __html: review.attributes.content,
                          }}
                        />
                      </div>
                    </>
                  ))
              )}
            </div>
          </div>
          {postReview && <PostReview data={username} article={article} />}
        </div>
      </div>
    </div>
  );
}
