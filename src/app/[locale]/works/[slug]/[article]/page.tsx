import Article from "@/common/works/article/Article";
import Reviews from "@/common/works/article/Reviews";
import { getData } from "@/lib/strapi";

export default async function ArticlePage({
  params,
}: {
  params: { article: string; locale: string };
}) {
  const { data } = await getData(
    `articles?locale=${params.locale}&populate[0]=work&populate[1]=content&populate[2]=content.images.image&populate[3]=content.elements&populate[4]=content.work&populate[5]=content.banner&populate[6]=content.banner.image&populate[7]=content.technos.image&populate=*`
  );

  return (
    <>
      <Article data={data} params={params} />
      <Reviews/>
    </>
  );
}
