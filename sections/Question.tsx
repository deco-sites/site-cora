import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Question {
  title: HTML;
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
        className={"max-w-[1700px] m-auto before:contents-{''} before:h-full before:top-0 before:w-full before:translate-x-[-3%] lg:before:translate-x-[-15%] xl:before:translate-x-[-23%] 2xl:before:translate-x-[-40%] before:bg-gray-100 before:rounded-lg before:flex before:absolute"}
      >
        <div
          className={"flex flex-col w-full sm:grid-cols-12 gap-6 sm:grid px-6 xl:px-16 z-10 relative xl:gap-6 "}
        >
          <div
            className={"sm:col-start-1 sm:col-end-9 xl:col-end-8 2xl:col-start-2 2xl:col-end-7"}
          >
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className={"text-[2rem] leading-[2.5rem] sm:text-[2.85rem] sm:leading-[3.5rem] text-secondary my-6 col-start-1 col-end-[-1] min-[600px]:col-end-9 xl:col-start-2 xl:col-end-11 xl:text-[5rem] xl:leading-[5.5rem] 2xl:my-12"}
            >
            </div>
            <div
              className={"text-secondary text-[1.3rem] "}
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </div>
          </div>
          <div
            className={"sm:col-start-9 sm:col-end-[-1]  xl:col-start-8 xl:col-end-12 2xl:col-start-7 2xl:col-end-10 translate-y-[20%] w-[200px] lg:w-[300px] xl:w-[390px]"}
          >
            <image src={image.image} alt={image.alt} loading={"lazy"} />
          </div>
        </div>
      </div>
    </div>
  );
}
