import { getData } from "@/lib/strapi";

export default async function HomeWorks() {
  const { data } = await getData("works?populate=*");

  const numberOfWorks = (works: any) => {
    let nb: number = 0;
    works.map((work: any) => nb++);
    return nb;
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Vous possédez au total {numberOfWorks(data)} projets.</p>
    </div>
  );
}
