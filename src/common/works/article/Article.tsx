import Paragraph from "./components/Paragraph";
import Diaporama from "./components/Diaporama";
import Header from "./components/Header";
import Tools from "./components/Tools";
import List from "./components/List";
import Video from "./components/Video";

export const components = [
  { name: "header", balise: Header },
  { name: "diaporama", balise: Diaporama },
  { name: "paragraph", balise: Paragraph },
  { name: "tools", balise: Tools },
  { name: "list", balise: List },
  { name: "video", balise: Video},
];

export default function Article({
  data,
  params,
}: {
  data: any;
  params: { article: string };
}) {
  return (
    <div className="bg-slate-50">
      <div className="py-10 mx-auto max-w-4xl px-12">
        {data.map(
          (el: any) =>
            el.attributes.work.data.attributes.slug == params.article && (
              <div className="flex flex-col gap-20" key={el.attributes.work.data.attributes.slug}>
                {el.attributes.content.map((component: any) =>
                  components.map(
                    (el) =>
                      component.__component.includes(el.name) && (
                        <div key={el.name}>
                          <el.balise data={component} />
                        </div>
                      )
                  )
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
