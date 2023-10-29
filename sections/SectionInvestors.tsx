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
        className={"max-w-[1700px] m-auto flex flex-col sm:gap-5 px-6 lg:px-16 sm:flex-row-reverse justify-center items-center"}
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
          className={"text-2xl text-secondary sm:text-[2.2rem] sm:leading-[2.7rem] sm:w-2/4 lg:text-[3rem] lg:leading-[3.9rem] xl:text-[4rem] xl:leading-[4.9rem]"}
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </div>
      </div>
    </div>
  );
}
