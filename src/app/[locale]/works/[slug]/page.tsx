import { Title, Text } from "@/common/typography";
import Head from "@/common/works/projects/Head";
import { getData } from "@/lib/strapi";

const types: string[] = [];

const checkTypes = async () => {
  const { data } = await getData("types");
  data.map((el: any) => types.push(el.attributes.slug));
};

export default async function Works({ params }: { params: { slug: string } }) {
  checkTypes();
  const { data } = await getData(
    `${
      types.includes(params.slug) ? "types" : "domains"
    }?populate[works][populate]=*`
  );

  const getDomainTitle = (title: any) => {
    return title;
  };

  const getNumberOfWorks = (works: any) => {
    let nb = 0;
    let result = "";
    works.map((work: any) => nb++);
    if (nb == 0) {
      result = "Aucun projet disponible.";
    } else if (nb == 1) {
      result = "1 projet disponible";
    } else {
      result = `${nb} projets disponibles.`;
    }
    return result;
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center flex flex-col gap-3">
        <Title size={Title.size.XXXLARGE} weight={Title.weight.BOLD}>
          {data.map(
            (domain: any) =>
              domain.attributes.slug == params.slug &&
              getDomainTitle(domain.attributes.title)
          )}
        </Title>
        <Text
          align={Text.align.CENTER}
          size={Text.size.LARGE}
          color={Text.color.GRAY}
        >
          {data.map(
            (domain: any) =>
              domain.attributes.slug == params.slug &&
              getNumberOfWorks(domain.attributes.works.data)
          )}
        </Text>
      </div>
      {data.map(
        (domain: any) =>
          domain.attributes.slug == params.slug && (
            <Head key={domain.id} data={domain.attributes.works.data} />
          )
      )}{" "}
    </div>
  );
}
