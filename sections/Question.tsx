import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Question {
  title: {
    titleSimple: string;
    titleColor: string;
    titleSimpleSecord: string;
  };
  description: HTML;
  image: {
    image: DecoImage;
    alt: string;
  };
}

export default function Question({ question }: { question: Question }) {
  const { title, description, image } = question;
  return (
    <div className={"relative py-20 xl:py-24 translate-y-[-5%]"}>
      <div
        className={"before:contents-{''} before:h-full before:top-0 before:w-full before:translate-x-[-3%] xl:before:translate-x-[-23%] before:bg-gray-100 before:rounded-lg before:flex before:absolute"}
      >
        <div
          className={"flex flex-col w-full md:grid-cols-12 md:grid px-6 xl:px-16 z-10 relative xl:gap-6 "}
        >
          <div
            className={"md:col-start-1 md:col-end-10 xl:col-start-2 xl:col-end-9"}
          >
            <h3
              className={"xl:col-start-2 xl:col-end-[-2] text-[2.2rem] sm:text-[3rem] sm:leading-[3.5rem] md:leading-[3.9rem] text-secondary md:text-5xl xl:text-[5.6rem] lg:leading-[5.3rem] my-6 xl:my-14"}
            >
              {title.titleSimple}
              <strong className={"text-primary font-bold"}>
                {title.titleColor}
              </strong>
              {title.titleSimpleSecord}
            </h3>
            <div
              className={"text-secondary text-[1.3rem] xl:text-[1.4rem]"}
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </div>
          </div>
          <div
            className={"md:col-start-10 md:col-end-[-1] xl:col-start-9 xl:col-end-12 translate-y-[20%] w-[200px] xl:w-[390px]"}
          >
            <image src={image.image} alt={image.alt} />
          </div>
        </div>
      </div>
    </div>
  );
}
