import Article from "@/common/works/article/Article";
import Reviews from "@/common/works/article/Reviews";
import { getData } from "@/lib/strapi";

export const revalidate = 30;

export default async function ArticlePage({
  params,
}: {
  params: { article: string; locale: string };
}) {
  const { data } = await getData(
    `articles?locale=${params.locale}&populate[0]=work&populate[1]=content&populate[2]=content.images.image&populate[3]=content.elements&populate[4]=content.work&populate[5]=content.banner&populate[6]=content.banner.image&populate[7]=content.technos.image&populate=*`
  );
  const allArticleReviews = await getData(
    "articles?populate[0]=reviews&populate[1]=work&populate[2]=reviews.article"
  );
  const article = await getData("articles");

  let articleId = article.data
    .map((el: any) => el.attributes.identifier == params.article && el.id)
    .find((el: any) => el != false);

  return (
    <div>
      <Article data={data} params={params} />
      <Reviews
        data={allArticleReviews.data}
        article={articleId}
        params={params}
      />
    </div>
  );
}
