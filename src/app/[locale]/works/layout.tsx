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
  const navigation_data = data[0].attributes.domains.data;

  return (
    <WorksNavigation locale={locale} data={navigation_data}>
      <div>{children}</div>
    </WorksNavigation>
  );
}
