import Head from "@/common/works/projects/Head";
import { getData } from "@/lib/strapi";

export default async function Works({ params }: { params: { slug: string } }) {
  const { data } = await getData("domains?populate=*");
  const getDomainTitle = (title: any) => {
    return title;
  };

  const getNumerOfWorks = (works: any) => {
    let nb = 0;
    works.map((work: any) => nb++);
    return nb;
  };
  return (
    <div>
      <h1>
        Hello{" "}
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
            getNumerOfWorks(domain.attributes.works.data)
        )}{" "}
        projets.
      </p>
      <Head />
    </div>
  );
}
