import ButtonNav from "deco-sites/start/islands/ButtonNav.tsx";
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: {
    src: DecoImage;
    alt: string;
    href: string;
  };
  itensMenu: {
    label: string;
    href: string;
  }[];
  login: {
    label: string;
    href: string;
  };
  register: {
    label: string;
    href: string;
  };
}

export default function Header({ logo, itensMenu, login, register }: Props) {
  return (
    <header
      className={"fixed top-0 left-0 w-full h-[64px] xl:h-[88px] bg-base-100 z-50 flex items-center"}
    >
      <div className={"md:grid md:grid-cols-12 md:gap-6 w-full px-6 xl:px-16"}>
        <div
          className={"w-full md:col-start-1 md:col-end-[-1] flex flex-row xl:justify-around items-center h-full"}
        >
          <div>
            <a href={logo.href}>
              <image src={logo.src} alt={logo.alt} />
            </a>
          </div>

          <ul
            className={"hidden xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-5 ml-16"}
          >
            {itensMenu.map((link, index) => {
              return (
                <li
                  style={`transition-delay: `}
                  className={` text-secondary hover:text-primary xl:text-base`}
                >
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            className={"flex-row flex justify-center items-center gap-6 ml-auto"}
          >
            <div className={"hidden md:flex flex-row gap-6 ml-auto"}>
              <a
                href={login.href}
                className={"text-secondary flex justify-center items-center xl:text-lg"}
              >
                {login.label}
              </a>
              <a
                href={register.href}
                className={"w-[270px] bg-primary text-base-100 rounded-3xl h-[48px] flex justify-center items-center xl:w-[190px] xl:text-lg xl:font-bold"}
              >
                {register.label}
              </a>
            </div>
            <nav className={"xl:hidden"}>
              <ButtonNav
                itensMenu={itensMenu}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
