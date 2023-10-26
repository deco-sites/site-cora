import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  image: {
    src: DecoImage;
    alt: string;
  };
  title: HTML;
}
export default function SectionInvestors({ image, title }: Props) {
  return (
    <div className={"flex w-full py-14 lg:py-28"}>
      <div
        className={"flex flex-col sm:gap-5 px-6 lg:px-16 sm:flex-row-reverse justify-center items-center"}
      >
        <div className={"rounded-xl sm:w-2/4"}>
          <image
            className={"rounded-xl mb-7 w-full"}
            src={image.src}
            alt={image.alt}
            loading={"lazy"}
          />
        </div>
        <div
          className={"text-2xl text-secondary sm:text-4xl md:text-5xl md:leading-[3.8rem] sm:w-2/4 lg:text-[4rem] lg:leading-[4.9rem] "}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </div>
      </div>
    </div>
  );
}
