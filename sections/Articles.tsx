import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Article from "../components/ui/Article.tsx";

export interface Article {
  image: {
    image: DecoImage;
    alt: string;
  };
  title: string;
  description: HTML;
  link: {
    label: string;
    href: string;
  };
}

export interface Props {
  title: {
    titleSimple: string;
    titleColor: string;
    titleSimpleSecord: string;
  };
  subTitle: HTML;
  articles: Article[];
}

export default function Articles({ props }: { props: Props }) {
  const { title, subTitle, articles } = props;

  return (
    <div className={"w-full "}>
      <div className={"flex flex-col"}>
        <div
          className={" grid grid-cols-1 xl:grid-cols-12 px-6 py-14 xl:px-16"}
        >
          <h3
            className={"xl:col-start-2 xl:col-end-[-2] text-[2.2rem] sm:text-[3rem] sm:leading-[3.5rem] text-secondary md:text-5xl xl:text-[5.6rem] xl:my-14"}
          >
            {title.titleSimple}
            <strong className={"text-primary font-bold"}>
              {title.titleColor}
            </strong>
            {title.titleSimpleSecord}
          </h3>
          <div
            className={"text-secondary text-base py-2 xl:col-start-2 xl:col-end-[-2] md:text-[1.5rem] xl:text-[1.8rem] font-light"}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          >
          </div>
        </div>
        <div>
          {articles.map((iten, index) => {
            return <Article props={iten} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
