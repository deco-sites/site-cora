import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import Article from "../components/ui/Article.tsx";

export interface Article {
  image: {
    image: DecoImage;
    alt: string;
  };
  title: HTML;
  description: HTML;
  link: {
    label: string;
    href: string;
  };
}

export interface Props {
  title: HTML;
  subTitle: HTML;
  articles: Article[];
}

export default function Articles({ props }: { props: Props }) {
  const { title, subTitle, articles } = props;

  return (
    <div className={"w-full "}>
      <div className={"flex flex-col"}>
        <div
          className={" px-6 sm:px-8 xl:px-16 grid grid-cols-12 md:gap-6 max-w-[1700px] m-auto"}
        >
          <div
            className={"py-14 lg:py-20 flex flex-col gap-6 col-start-1 col-end-[-1] min-[600px]:col-end-9 xl:col-start-2 xl:col-end-11"}
          >
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className={"text-[2rem] leading-[2.5rem] sm:text-[2.85rem] sm:leading-[3.5rem] text-secondary my-6 xl:text-[5rem] xl:leading-[5.5rem] 2xl:my-12"}
            >
            </div>

            <div
              className={"text-secondary text-base py-2 xl:col-start-2 xl:col-end-[-2] md:text-[1.5rem] xl:text-[1.8rem] font-light"}
              dangerouslySetInnerHTML={{ __html: subTitle }}
            >
            </div>
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
