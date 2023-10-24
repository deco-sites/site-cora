import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Card from "deco-sites/start/components/ui/Card.tsx";

interface Card {
  title: string;
  description: string;
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
  title: {
    titleSimple: string;
    titleColor: string;
  };
  cards: Card[];
}

export default function SectionCard({ title, cards }: Props) {
  return (
    <div className={"py-14  flex flex-col"}>
      <div className={"grid-cols-12 grid w-full px-6 xl:px-16"}>
        <div
          className={"xl:col-start-2 xl:col-end-[-2] md:col-end-9 col-start-1 col-end-[-1]"}
        >
          <h3
            className={"my-8 text-[2.2rem] sm:text-[3rem] sm:leading-[3.5rem] text-secondary md:text-5xl xl:text-[5.6rem] xl:my-14"}
          >
            {title.titleSimple}
            <span className={"text-primary font-bold"}>
              {title.titleColor}
            </span>
          </h3>
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
