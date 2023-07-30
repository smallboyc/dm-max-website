import { numberOf } from "@/app/[locale]/works/page";

export default function Stats({ users, reviews, data, locale }: any) {
  let stats = [
    {
      id: 1,
      name: locale == "en" ? "Projects" : "Projets",
      value: numberOf(data),
    },
    {
      id: 2,
      name: locale == "en" ? "Subscribers" : "Abonnés",
      value: numberOf(users),
    },
    {
      id: 3,
      name: locale == "en" ? "Opinion" : "Avis",
      value: numberOf(reviews),
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <dl className="mt-10 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col bg-primary/10 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
