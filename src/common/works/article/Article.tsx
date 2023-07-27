import Paragraph from "./components/Paragraph";
import Diaporama from "./components/Diaporama";
import Header from "./components/Header";
import Tools from "./components/Tools";
import { Title } from "@/common/typography";
import List from "./components/List";
export const components = [
  { name: "header", balise: Header },
  { name: "diaporama", balise: Diaporama },
  { name: "paragraph", balise: Paragraph },
  { name: "tools", balise: Tools },
  { name: "list", balise: List },
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
      <div className="py-10">
        {data.map(
          (el: any) =>
            el.attributes.work.data.attributes.slug == params.article && (
              <div key={el.attributes.work.data.attributes.slug}>
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
