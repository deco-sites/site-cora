import PoweredByDeco from "deco-sites/std/components/PoweredByDeco.tsx";
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";

interface ListLinks {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}
interface RowInfos {
  primarySection: ListLinks[];
  secordSection: {
    primaryCol: {
      title: string;
      linkAndroid: {
        href: string;
        image: {
          src: DecoImage;
          alt: string;
        };
      };
      linkIOS: {
        href: string;
        image: {
          src: DecoImage;
          alt: string;
        };
      };
    };
    secordCol: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    };
  };
}

interface SocialMedia {
  href: string;
  icon: {
    src: DecoImage;
    alt: string;
  };
}
export interface Props {
  titleSocialMedia: string;
  socialMedia: SocialMedia[];
  container: RowInfos;
  posFooter: HTML;
}

export default function Footer(
  { titleSocialMedia, socialMedia, container, posFooter }: Props,
) {
  return (
    <div>
      <div className={"bg-[#3b3b3b] pb-12"}>
        <div>
          <div className={"hidden"}>
            <h4>
              {titleSocialMedia}
            </h4>
          </div>
          <div
            className={"grid grid-cols-5 grid-rows-1 justify-center items-center  w-full h-full bg-black"}
          >
            {socialMedia.map((link) => {
              return (
                <div
                  className={"border-base-100 border-r first:border-l min-h-[100px] flex justify-center items-center w-full h-full"}
                >
                  <a href={link.href}>
                    <image
                      className={"w-8 h-8"}
                      src={link.icon.src}
                      alt={link.icon.alt}
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"px-6 lg:grid lg:grid-cols-12 lg:gap-6"}>
          <div
            className={"pt-12 md:flex md:flex-row md:flex-wrap lg:col-start-2 lg:col-end-[-2]"}
          >
            {container.primarySection.map((cols) => {
              return (
                <div
                  class={"md:grid md:grid-cols-6 mb-14 md:w-2/4 lg:w-1/4"}
                >
                  <div
                    className={"flex flex-col justify-center items-center md:justify-start md:items-start lg:col-start-1 md:col-start-2 md:col-end-[-1]"}
                  >
                    <div
                      className={"mb-3 font-bold text-[1.3rem] text-base-100 md:text-[1.5rem]"}
                    >
                      <h3>{cols.title}</h3>
                    </div>
                    <div>
                      <ul className={"flex flex-col gap-2"}>
                        {cols.links.map((link) => {
                          return (
                            <li
                              className={"text-base md:text-[1rem] font-light text-gray-200 text-center md:text-start pb-1"}
                            >
                              <a href={link.href}>
                                {link.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={"md:flex md:flex-row md:w-full lg:col-start-2 lg:col-end-[-2]"}
          >
            <div className={"md:grid md:grid-cols-6  mb-14 md:w-2/4"}>
              <div
                className={"flex flex-col justify-center md:justify-start md:items-start items-center md:col-start-2 lg:col-start-1 md:col-end-[-1]"}
              >
                <h3
                  className={"mb-3 font-bold text-[1.3rem] text-base-100 md:text-start"}
                >
                  {container.secordSection.primaryCol.title}
                </h3>
                <div
                  className={"flex flex-col md:flex-row  md:w-full gap-3"}
                >
                  <div className={"mb-6"}>
                    <a
                      href={container.secordSection.primaryCol.linkAndroid.href}
                    >
                      <image
                        className={"w-[154px]"}
                        src={container.secordSection.primaryCol.linkAndroid
                          .image
                          .src}
                        alt={container.secordSection.primaryCol.linkAndroid
                          .image
                          .alt}
                      />
                    </a>
                  </div>
                  <div className={"mb-6"}>
                    <a
                      href={container.secordSection.primaryCol.linkIOS.href}
                    >
                      <image
                        className={"w-[154px]"}
                        src={container.secordSection.primaryCol.linkIOS.image
                          .src}
                        alt={container.secordSection.primaryCol.linkIOS.image
                          .alt}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"md:grid md:grid-cols-6 lg:col-start-1 mb-14 md:w-2/4"}
            >
              <div
                className={"flex flex-col justify-center items-center md:justify-start md:items-start md:col-start-2 lg:col-start-1 md:col-end-[-1]"}
              >
                <h3 className={"mb-3 font-bold text-[1.3rem] text-base-100"}>
                  {container.secordSection.secordCol.title}
                </h3>
                <div>
                </div>

                <ul className={"flex flex-col md:gap-2"}>
                  {container.secordSection.secordCol.links.map((link) => {
                    return (
                      <li
                        className={"text-base font-light text-gray-200 text-center md:text-[1rem] md:text-start "}
                      >
                        <a href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"pb-5 lg:pb-0"}>
        <div className={"px-6 lg:grid-cols-12 lg:grid"}>
          <div
            className={"py-6 flex flex-col text-sm justify-center items-center text-center text-secondary lg:justify-start lg:text-start lg:items-start lg:col-start-2 lg:col-end-[-1]"}
            dangerouslySetInnerHTML={{ __html: posFooter }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
