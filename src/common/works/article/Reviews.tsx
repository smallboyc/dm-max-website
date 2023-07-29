"use client";
import classNames from "classnames";
import { AiFillHeart, AiOutlineLike } from "react-icons/ai";
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

const icons = [
  { rating: "love it", icon: AiFillHeart, color: "text-red-400" },
  { rating: "very good", icon: AiOutlineLike, color: "text-yellow-400" },
  { rating: "great", icon: HiCheckBadge, color: "text-green-400" },
];

const numberOfReviews = (data: any, params: any) => {
  let nb = 0;
  data.map(
    (el: any) =>
      el.attributes.work.data.attributes.slug == params.article &&
      el.attributes.reviews.data?.map((review: any) => nb++)
  );
  return nb;
};

const reviews = {
  totalCount: 6,
  counts: [
    {
      rating: 3,
      count: 4,
      item: AiFillHeart,
      color: "text-red-400",
      bg: "bg-red-400",
    },

    {
      rating: 2,
      count: 1,
      item: AiOutlineLike,
      color: "text-yellow-400",
      bg: "bg-yellow-400",
    },
    {
      rating: 1,
      count: 1,
      item: HiCheckBadge,
      color: "text-green-400",
      bg: "bg-green-400",
    },
  ],
  featured: [
    {
      id: 1,
      rating: 3,
      item: AiFillHeart,
      color: "text-red-400",
      bg: "bg-red-400",
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    // More reviews...
  ],
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
  article : number;
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

          <div className="mt-3 flex items-center">
            <p className="ml-2 text-sm text-gray-900">
              Based on {numberOfReviews(data, params)} reviews
            </p>
          </div>

          <div className="mt-6">
            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <count.item
                        className={classNames(
                          count.count > 0 ? `${count.color}` : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className={classNames(
                              `-400 absolute inset-y-0 rounded-full border ${count.bg}`
                            )}
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
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
                        Write a review
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <h3 className="text-lg font-medium text-gray-900 mt-10">
              Identifié en tant que{" "}
              <span className="text-variation font-bold">{username}</span>.
            </h3>
          )}
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {data.map(
                (el: any) =>
                  el.attributes.work.data.attributes.slug == params.article &&
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
                              {icons.map(
                                (el: any) =>
                                  review.attributes.rating == el.rating && (
                                    <>
                                      <el.icon
                                        className={`${el.color} h-5 w-5 flex-shrink-0`}
                                        aria-hidden="true"
                                      />
                                    </>
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
          {postReview && <PostReview data={username} params={params} article={article} />}
        </div>
      </div>
    </div>
  );
}
