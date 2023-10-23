import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

/** @title {{{title}}} - {{{href}}} */
export interface TitleHero {
  titleWhite?: string;
  titleDefault?: string;
}

export interface Paragraph {
  simple?: string;
  bold?: string;
}

export interface Button {
  label: string;
  href: string;
}

export interface Props {
  title?: TitleHero;
  /** @format textarea */
  paragraph?: Paragraph;
  button: Button;
  image: DecoImage;
  altImage: string;
}

export default function Hero(
  { title, paragraph, image, button, altImage }: Props,
) {
  return (
    <section
      className={"px-6 bg-primary h-screen w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-center md:gap-6 xl:px-16"}
    >
      <div className={"py-7"}>
        <div>
          <h2
            className={" text-secondary text-[1.6rem] leading-[2rem] lg:text-[2.2rem] lg:leading-[3rem] xl:text-[2.5rem] xl:leading-[2.5rem]"}
          >
            <span className={"font-bold text-base-100"}>
              {title?.titleWhite + " "}
            </span>
            {title?.titleDefault}
          </h2>
        </div>
        <div className={"my-8"}>
          <p
            className={"text-base-100 text-[1.22rem] leading-5 lg:text-[1.3rem] lg:leading-6 xl:text-[1.6rem] xl:leading-[1.8rem]"}
          >
            {paragraph?.simple}
            <strong>{paragraph?.bold}</strong>
          </p>
        </div>
        <div
          className={"my-8 fixed bottom-6 flex justify-center md:justify-start md:static md:left-0 md:translate-x-0 w-full left-[50%] translate-x-[-50%]"}
        >
          <a
            className={"bg-secondary rounded-[32px] px-7 py-3 flex justify-center items-center w-[256px] "}
            href={button.href}
          >
            <p className={" font-bold text-base-100"}>
              {button.label}
            </p>
          </a>
        </div>
      </div>
      <div className={""}>
        <picture className={"md:px-3"}>
          <image src={image} className={"md:px-8"} alt={altImage} />
        </picture>
      </div>
    </section>
  );
}
