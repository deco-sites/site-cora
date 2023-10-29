import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Card from "deco-sites/start/components/ui/Card.tsx";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

interface Card {
  title: HTML;
  description: HTML;
  link: {
    label: string;
    href: string;
  };
  image: {
    imagem: DecoImage;
    alt: string;
  };
}

interface Props {
  title: HTML;
  cards: Card[];
}

export default function SectionCard({ title, cards }: Props) {
  return (
    <div className={"py-14  flex flex-col"}>
      <div
        className={" px-6 sm:px-8 xl:px-16 grid grid-cols-12 md:gap-6 max-w-[1700px] m-auto"}
      >
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className={"text-[2rem] leading-[2.5rem] sm:text-[2.85rem] sm:leading-[3.5rem] text-secondary my-6 col-start-1 col-end-[-1] min-[600px]:col-end-9 xl:col-start-2 xl:col-end-11 xl:text-[5rem] xl:leading-[5.5rem] 2xl:my-12"}
        >
        </div>
        <div
          className={"xl:col-start-2 xl:col-end-[-2] col-start-1 col-end-[-1]"}
        >
          <div
            className={"grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 sm:grid-rows-2"}
          >
            {cards.map((card) => {
              return <Card card={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
