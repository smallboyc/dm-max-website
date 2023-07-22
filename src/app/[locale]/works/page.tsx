import { getData } from "@/lib/strapi";
import { Title, Text } from "@/common/typography";
import Stats from "@/common/works/Stats";
import Head from "@/common/works/projects/Head";

export default async function HomeWorks() {
  const { data } = await getData("works?populate=*");

  const numberOfWorks = (works: any) => {
    let nb: number = 0;
    works.map((work: any) => nb++);
    return nb;
  };
  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        <Title size={Title.size.XXXLARGE} weight={Title.weight.BOLD}>
          Welcome to <span className="text-variation">works</span>!
        </Title>

        <Text
          align={Text.align.CENTER}
          size={Text.size.LARGE}
          color={Text.color.GRAY}
        >
          {" "}
          Discover the latest event and every projects on the Home page.
        </Text>
        <p>Vous possédez au total {numberOfWorks(data)} projets.</p>
      </div>
      <Stats />
      <Head data={data} />
    </div>
  );
}
