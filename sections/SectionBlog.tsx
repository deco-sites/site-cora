import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

export interface Posts {
  href: string;
  image: {
    src: DecoImage;
    alt: string;
  };
  title: HTML;
  date: HTML;
}

export interface Props {
  title: HTML;
  posts: Posts[];
}

function Post({ post }: { post: Posts }) {
  const { href, image, title, date } = post;
  return (
    <div className={"mb-5 sm:mb-10"}>
      <div className={""}>
        <a
          href={href}
          className={"sm:grid sm:grid-cols-[40%_auto_30px] sm:gap-6 justify-between "}
        >
          <image
            className={"rounded-xl mb-8 sm:mb-0 w-full h-full sm:object-cover sm:min-h-[200px] lg:min-h-[300px]"}
            src={image.src}
            alt={image.alt}
            loading={"lazy"}
          />
          <div className={"flex flex-col sm:justify-between"}>
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className={"mb-7 text-[1.5rem] text-secondary sm:mb-0 lg:text-[2.2rem] xl:text-[3.4rem] 2xl:text-[3rem]"}
            >
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: date }}
              className={"font-bold text-primary text-base"}
            >
            </div>
          </div>
          <div
            className={"rounded-full bg-primary hidden sm:flex w-[28px] h-[28px] sm:justify-center sm:items-center"}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 18l6-6.001L10.003 6"
              >
              </path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function SectionBlog({ title, posts }: Props) {
  return (
    <div
      className={"w-full py-14 bg-gradient-to-b from-gray-100 to-base-100 xl:pt-36 xl:pb-52"}
    >
      <div
        className={"w-full max-w-[1700px] m-auto px-6 xl:px-16 flex flex-col md:gap-6"}
      >
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className={"my-6 text-[2rem] text-secondary sm:text-[2.85rem] xl:text-[5rem] xl:my-12 xl:leading-[5.9rem]"}
        >
        </div>
        <div className={"pt-10"}>
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
