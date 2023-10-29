import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

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

export default function Card({ card }: { card: Card }) {
  const { title, description, link, image } = card;

  return (
    <div
      className={"rounded-3xl odd:bg-base-500 sm:odd:bg-base-600 sm:odd:first:bg-base-500 sm:last:bg-base-500 sm:first:bg-base-500 bg-base-600 p-6 hover:scale-105 duration-500 ease-in-out pb-0 flex flex-col justify-between"}
    >
      <div>
        <h4
          className={"font-extrabold text-[1.4rem] text-secondary lg:text-[2rem]"}
        >
          {title}
        </h4>
        <p
          className={"my-10 text-[1rem] font-light text-secondary lg:text-[1.2rem]"}
        >
          {description}
        </p>
        <a
          href={link.href}
          className={"group text-secondary flex flex-row gap-2 font-bold"}
        >
          {link.label}
          <span
            className={"group-hover:translate-x-4 ease-in-out duration-300"}
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="b" fill="#fff">
                <path
                  fill-rule="evenodd"
                  d="M14.352 6.645a.5.5 0 0 0-.707.708l4.149 4.146H4.999a.5.5 0 0 0 0 1h12.795l-4.149 4.147a.5.5 0 0 0 .707.708l5.003-5.001a.498.498 0 0 0 .108-.545l-.003-.008a.5.5 0 0 0-.105-.155h-.001l-5.002-5z"
                  clip-rule="evenodd"
                >
                </path>
              </mask>
              <path
                fill="#202020"
                d="M13.645 6.646l-.707-.707.707.707zm.707 0l-.707.707.707-.708zm-.707.707l.707-.708-.707.708zm4.149 4.146v1a1 1 0 0 0 .706-1.707l-.706.707zm0 1l.707.707a1 1 0 0 0-.707-1.707v1zm-4.149 4.147l.707.708-.707-.708zm0 .707l-.707.708.707-.707zm.707 0l.708.708-.708-.707zm5.003-5l.707.707-.707-.707zm0 0l.707.707-.707-.708zm.108-.163l-.924-.383v.001l.924.382zm0-.382l-.924.382.924-.382zm-.003-.008l-.918.398.918-.399zm-.105-.155l.707-.707-.707.707zm-.001 0l-.707.707.002.002.705-.71zm-5.001-4.292a.5.5 0 0 1-.707 0l1.413-1.415a1.5 1.5 0 0 0-2.12 0l1.414 1.415zm0-.708a.5.5 0 0 1 0 .708l-1.415-1.414a1.5 1.5 0 0 0 0 2.12l1.414-1.414zm4.147 4.147l-4.148-4.147L12.94 8.06l4.148 4.146 1.413-1.414zm-.706-.293H4.999v2h12.795v-2zm-12.795 0a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2zm-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm1.5 1.5h12.795v-2H4.999v2zm12.088-1.707l-4.149 4.147 1.414 1.415 4.149-4.148-1.414-1.414zm-4.149 4.147a1.5 1.5 0 0 0 0 2.122l1.415-1.415a.5.5 0 0 1 0 .708l-1.415-1.415zm0 2.122a1.5 1.5 0 0 0 2.122 0l-1.415-1.415a.5.5 0 0 1 .708 0l-1.415 1.415zm2.122 0l5.002-5.001-1.415-1.415-5.001 5.001 1.414 1.415zm5.002-5.001l-1.415-1.415 1.415 1.415zm-1.523-1.252a.5.5 0 0 1 .108-.162l1.415 1.413a1.5 1.5 0 0 0 .325-.486l-1.848-.765zm1.848.765c.074-.178.114-.372.114-.574h-2a.5.5 0 0 1 .038-.192l1.848.766zM20.5 12c0-.202-.04-.396-.114-.574l-1.848.766a.502.502 0 0 1-.038-.192h2zm-.114-.574l-.01-.024-1.834.797a.486.486 0 0 1-.004-.008l1.848-.765zm-1.74.927a.501.501 0 0 1-.104-.154l1.834-.797a1.498 1.498 0 0 0-.315-.463l-1.415 1.414zm1.415-1.414l-.003-.003-1.41 1.42-.002-.002 1.415-1.415zm-6.417-3.585l5.002 5 1.414-1.415-5.002-5-1.413 1.415z"
                mask="url(#b)"
              >
              </path>
            </svg>
          </span>
        </a>
      </div>
      <div
        className={"h-[160px] w-full flex justify-end items-end xl:h-[220px]"}
      >
        <image
          className={"h-[160px] translate-x-[1.5rem] rounded-br-lg xl:h-[220px]"}
          src={image.imagem}
          alt={image.alt}
          loading={"lazy"}
        >
        </image>
      </div>
    </div>
  );
}
