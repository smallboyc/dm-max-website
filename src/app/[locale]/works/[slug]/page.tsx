import Head from "@/common/works/projects/Head";
import { getData } from "@/lib/strapi";

export default async function Works({ params }: { params: { slug: string } }) {
  const { data } = await getData("domains?populate=works.image");

  const getDomainTitle = (title: any) => {
    return title;
  };

  const getNumberOfWorks = (works: any) => {
    let nb = 0;
    works.map((work: any) => nb++);
    return nb;
  };

  return (
    <div>
      <h1>
        {data.map(
          (domain: any) =>
            domain.attributes.slug == params.slug &&
            getDomainTitle(domain.attributes.title)
        )}
      </h1>
      <p>
        Vous possédez{" "}
        {data.map(
          (domain: any) =>
            domain.attributes.slug == params.slug &&
            getNumberOfWorks(domain.attributes.works.data)
        )}{" "}
        projets.
      </p>
      {data.map(
        (domain: any) =>
          domain.attributes.slug == params.slug && (
            <Head key={domain.id} data={domain.attributes.works.data} />
          )
      )}{" "}
    </div>
  );
}
