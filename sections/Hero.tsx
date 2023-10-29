import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Paragraph {
  simple?: string;
  bold?: string;
}

export interface Button {
  label: string;
  href: string;
}

export interface Props {
  titleHero: HTML;
  paragraphHero: HTML;
  button: Button;
  image: DecoImage;
  altImage: string;
}

export default function Hero(
  { titleHero, paragraphHero, image, button, altImage }: Props,
) {
  return (
    <section
      className={"px-6 pt-16 bg-primary h-screen w-full flex justify-center items-center"}
    >
      <div
        className={"max-w-[1700px] min-h-[604px] m-auto grid grid-cols-1 grid-rows-2 md:grid-cols-12 md:grid-rows-1 justify-center items-center md:gap-6 lg:px-16"}
      >
        <div className={"py-7 pt-14 sm:p-0 md:col-start-1 md:col-end-7"}>
          <div
            dangerouslySetInnerHTML={{ __html: titleHero }}
            className={" text-secondary text-[1.7rem] leading-[2.2rem] lg:text-[2.4rem] lg:leading-[3.2rem] 2xl:text-[4rem] 2xl:leading-[4.7rem]"}
          >
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: paragraphHero }}
            className={" my-8 text-base-100 text-[1.22rem] leading-6 lg:text-[1.15rem] lg:leading-6 xl:text-[1.4rem] xl:leading-[1.8rem]"}
          >
            <p>
            </p>
          </div>
          <div
            className={"my-8 fixed bottom-6 flex justify-center md:justify-start md:static md:left-0 md:translate-x-0 w-full left-[50%] translate-x-[-50%] z-20"}
          >
            <a
              className={"bg-black rounded-[32px] px-6 py-3 flex justify-center items-center w-[256px] "}
              href={button.href}
            >
              <p className={" font-bold text-base-100"}>
                {button.label}
              </p>
            </a>
          </div>
        </div>
        <div className={"md:col-start-7 md:col-end-[-1]"}>
          <picture className={"md:px-14"}>
            <image src={image} className={"md:px-8 "} alt={altImage} />
          </picture>
        </div>
      </div>
    </section>
  );
}
