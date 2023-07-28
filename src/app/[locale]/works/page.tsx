import { getData } from "@/lib/strapi";
import { Title, Text } from "@/common/typography";
import Stats from "@/common/works/Stats";
import Head from "@/common/works/projects/Head";

export const numberOf = (works: any) => {
  let nb: number = 0;
  works.map((work: any) => nb++);
  return nb;
};

export default async function HomeWorks({
  params,
}: {
  params: { locale: string };
}) {
  console.log(params.locale);
  const { data } = await getData(`works?locale=${params.locale}&populate=*`);
  const users = await getData("users");

  return (
    <div className="py-20">
      <div className="flex flex-col gap-3 items-center">
        <Title size={Title.size.XXXLARGE} weight={Title.weight.BOLD}>
          {params.locale == "en" ? "Welcome to" : "Bienvenue sur"}{" "}
          <span className="text-variation">works</span>!
        </Title>

        <Text
          align={Text.align.CENTER}
          size={Text.size.LARGE}
          color={Text.color.GRAY}
        >
          {" "}
          {params.locale == "en"
            ? "Discover the latest event and every projects on the Home page."
            : "Découvrez tous les projets sur cette page."}
        </Text>
      </div>
      <Stats users={users} data={data} locale={params.locale} />
      <Head data={data} />
    </div>
  );
}
