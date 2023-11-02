import Icon from "../components/ui/Icon.tsx";
import Button from "../components/ui/Button.tsx";
import Slider from "../components/ui/Slider.tsx";
import SliderJS from "../islands/SliderJS.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { useId } from "../sdk/useId.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Image {
  image: LiveImage;
  href: string;
  alt: string;
}

/**
 * @titleBy alt
 */
export interface SliderNews {
  title: HTML;
  images: Image[];
}

function BannerItem({ image, href, alt }: Image) {
  return (
    <a href={href} className={"flex justify-center items-center w-full"}>
      <img
        class="object-cover w-full h-full max-w-[216px]"
        loading={"lazy"}
        src={image}
        alt={alt}
        width={216}
        height={72}
      />
    </a>
  );
}

function Dots({ images }: SliderNews) {
  return (
    <>
      <ul class="carousel justify-center col-span-full gap-2 z-10 row-start-4 xl:hidden">
        {images.map((_, index: number) => (
          <li
            class={`"carousel-item ${
              index < 3 ? "sm:group-disabled:first:hidden" : ""
            }`}
            style={`display: ${
              index > 0 || index <= images.length ? "none" : "flex"
            }`}
          >
            <Slider.Dot index={index}>
              <div class={`"py-5" ${index < 3 ? "" : ""}`}>
                <div class="w-2 h-2 rounded-full group-disabled:bg-primary group-disabled:w-6 ease-in-out duration-300 bg-gray-200" />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function BannerCarousel({ images, title }: SliderNews) {
  const id = useId();

  return (
    <div className={"pt-10  pb-5 w-full "}>
      <div
        className={"max-w-[1700px] px-7 md:px-16 md:grid md:grid-cols-12 md:gap-6 m-auto justify-center items-center flex flex-col pb-5"}
      >
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className={" mb-5 text-lg md:col-start-1 md:col-end-12 xl:col-start-2 xl:col-end-[-2] self-start text-gray-300 font-light xl:text-[1.5rem] col-start-2 col-end-11"}
        >
        </div>
        <div
          id={id}
          class="grid grid-cols-1 md:col-start-1 md:col-end-12 xl:col-start-2 xl:col-end-[-2] grid-rows-2"
        >
          <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
            {images?.map((image, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full sm:w-4/12 lg:w-1/4 xl:w-auto"
              >
                <BannerItem
                  alt={image.alt}
                  href={image.href}
                  image={image.image}
                />
              </Slider.Item>
            ))}
          </Slider>

          <Dots images={images} title={title} />

          <SliderJS rootId={id} interval={2000} infinite />
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
