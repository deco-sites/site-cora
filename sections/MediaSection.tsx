import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Props {
  imageOfVideo: {
    image: DecoImage;
    alt: string;
  };
  title: HTML;
  description: HTML;
}

export default function MediaSection(
  { imageOfVideo, title, description }: Props,
) {
  return (
    <div className={"relative overflow-hidden"}>
      <div
        className={"before:contents-[''] before:bg-primary before:absolute before:w-full before:h-full before:rounded-xl before:translate-x-[10%] xl:before:translate-x-[40%] before:top-0"}
      >
        <div
          className={"flex flex-col-reverse px-6 pt-16 pb-24 z-10 relative w-full sm:grid sm:grid-cols-2 sm:gap-5 xl:gap-14 xl:px-16"}
        >
          <div
            className={"relative flex justify-center items-center group rounded-xl bg-[#393636] hover:scale-110 duration-700 ease-in-out"}
          >
            <div
              className={" w-full h-full before:group-hover:bg-black before:group-hover:opacity-80 before:duration-700 before:ease-in-out z-0 before:absolute before:contents-[''] before:w-[75px] before:h-[75px] before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:bg-[#00000063] before:rounded-full after:absolute before:contents-[''] after:w-[0px] after:h-[0px] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:border-t-[20px] after:border-l-[25px] after:border-b-[#00000000] after:border-t-[#00000000] after:border-b-[20px] after:border-base-100 after:left-[50.5%]"}
            >
            </div>
            <image
              className={"rounded-xl group-hover:opacity-50"}
              src={imageOfVideo.image}
              alt={imageOfVideo.image}
              loading={"lazy"}
            />
          </div>
          <div
            className={"pl-9 md:pl-0 flex flex-col sm:flex-col-reverse justify-center"}
          >
            <div
              className={"text-base-100 text-2xl md:text-4xl lg:text-[3rem] lg:leading-[3.2rem] xl:text-[4rem] xl:leading-[4.2rem] "}
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </div>
            <div
              className={"text-base-100 my-5 text-sm md:text-base lg:text-[1.25rem] leading-[1rem] xl:text-[1.4rem] xl:leading-[1.6rem]"}
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
