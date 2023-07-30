import classNames from "classnames";
import { Lovers_Quarrel } from "next/font/google";
import { AiFillHeart, AiOutlineLike } from "react-icons/ai";
import { HiCheckBadge } from "react-icons/hi2";

const updateRate = (data: any, arg: any, params: { article: string }) => {
  let rate = 0;
  data.map(
    (el: any) =>
      el.attributes.work.data?.attributes.slug == params.article &&
      el.attributes.reviews.data?.map(
        (review: any) =>
          (review.attributes.rating == arg ||
            review.attributes.rating == "all") &&
          rate++
      )
  );
  return rate;
};
const reviews = {
  counts: [
    {
      rating: 3,
      rate: "love",
      item: AiFillHeart,
      color: "text-red-400",
      bg: "bg-red-400",
    },
    {
      rating: 1,
      rate: "interesting",
      item: HiCheckBadge,
      color: "text-green-400",
      bg: "bg-green-400",
    },
  ],
};

export default function Rating({
  data,
  params,
}: {
  data: any;
  params: { article: string };
}) {
  let loveRate = updateRate(data, "love", params);
  let interestingRate = updateRate(data, "interesting", params);
  let totalCount = loveRate + interestingRate;
  return (
    <div className="mt-6">
      <dl className="space-y-3">
        {reviews.counts.map((count) => (
          <div key={count.rating} className="flex items-center text-sm">
            <dt className="flex flex-1 items-center">
              <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                <count.item
                  className={`${count.color}  h-5 w-5 flex-shrink-0`}
                  aria-hidden="true"
                />

                <div className="relative ml-3 flex-1">
                  <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                  {count.rate == "love" && loveRate > 0 ? (
                    <>
                      <div
                        className={classNames(
                          `-400 absolute inset-y-0 rounded-full border ${count.bg}`
                        )}
                        style={{
                          width: `calc(${loveRate} / ${totalCount} * 100%)`,
                        }}
                      />
                    </>
                  ) : count.rate == "interesting" && interestingRate > 0 ? (
                    <>
                      <div
                        className={classNames(
                          `-400 absolute inset-y-0 rounded-full border ${count.bg}`
                        )}
                        style={{
                          width: `calc(${interestingRate} / ${totalCount} * 100%)`,
                        }}
                      />
                    </>
                  ) : null}
                </div>
              </div>
            </dt>
            {count.rate == "love" ? (
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                {" "}
                {loveRate != 0 ? Math.round((loveRate / totalCount) * 100) : 0}%
              </dd>
            ) : (
              count.rate == "interesting" && (
                <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                  {" "}
                  {interestingRate != 0
                    ? Math.round((interestingRate / totalCount) * 100)
                    : 0}
                  %
                </dd>
              )
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
