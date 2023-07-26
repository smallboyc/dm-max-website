import Article from "@/common/works/article/Article";
import { getData } from "@/lib/strapi";

export default async function ArticlePage({
  params,
}: {
  params: { article: string; locale: string };
}) {
  const { data } = await getData(
    `articles?locale=${params.locale}&populate[0]=work&populate[1]=content&populate[2]=content.images&populate[3]=content.images.image&populate=*`
  );

  return (
    <>
      <Article data={data} params={params} />
    </>
  );
}
