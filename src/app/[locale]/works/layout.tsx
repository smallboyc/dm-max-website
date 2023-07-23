import WorksNavigation from "@/common/works/Navigation";
import { getData } from "@/lib/strapi";

export default async function Workslayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const { data } = await getData("navigations?populate=*");

  return (
    <WorksNavigation locale={locale} data={data}>
      <div>{children}</div>
    </WorksNavigation>
  );
}
