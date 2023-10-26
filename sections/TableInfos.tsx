import MenuTable from "deco-sites/start/islands/MenuTable.tsx";
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export type Link = {
  titleSimple: string;
  titleColor: string;
  href: string;
};

export interface RowProps {
  image: DecoImage;
  title: string;
  description: string;
  iten: "Check" | "Link";
  link?: Link;
}

export interface TableProps {
  title: {
    titleSimple: string;
    titleColor: string;
  };
  primaryOption: {
    title: string;
    rowProps: RowProps[];
  };
  secordOption: {
    title: string;
    rowProps: RowProps[];
  };
}

export type Props = {
  primaryOption: { title: string; rowProps: RowProps[] };
  secordOption: { title: string; rowProps: RowProps[] };
  index: number;
};

function RowTable({ primaryOption, secordOption, index }: Props) {
  return (
    <div
      className={"grid grid-cols-[auto_1fr_200px_200px] justify-center items-center gap-4 grid-rows-1 py-5 border-b border-gray-200 last:border-b-0"}
    >
      <image
        className={"w-[80px] object-contain max-h-14"}
        src={primaryOption.rowProps[index].image}
      >
      </image>
      <div>
        <h4 className={"text-secondary text-xl font-bold"}>
          {primaryOption.rowProps[index].title}
        </h4>
        <p className={"text-secondary text-base"}>
          {primaryOption.rowProps[index].description}
        </p>
      </div>
      <div className={"flex justify-center items-center w-full"}>
        {primaryOption.rowProps[index].iten == "Check"
          ? (
            <div className={"flex justify-center items-center w-12"}>
              <svg width="32" height="32" fill="none">
                <path
                  d="M18.1682 0.534245L18.624 0.77361C19.2926 1.12473 20.0369 1.30786 20.792 1.30786H21.307C22.8403 1.30786 24.2756 2.06056 25.1461 3.32227L25.4382 3.74549C25.8673 4.36697 26.4407 4.87454 27.1093 5.22565L27.5651 5.46502C28.9225 6.17734 29.8435 7.51043 30.0281 9.03242L30.0902 9.54287C30.181 10.2927 30.4529 11.0086 30.8821 11.6301L31.1742 12.0533C32.0454 13.3143 32.2402 14.9228 31.6971 16.3561L31.5146 16.837C31.247 17.5428 31.1547 18.3035 31.2456 19.0526L31.3076 19.563C31.4922 21.0843 30.9174 22.5991 29.7699 23.6157L29.3848 23.9567C28.8193 24.457 28.3844 25.0879 28.1161 25.7937L27.9337 26.2746C27.3899 27.7079 26.1767 28.7822 24.6881 29.1484L24.1883 29.2717C23.4548 29.4527 22.7769 29.8081 22.2114 30.3092L21.8263 30.6502C20.6788 31.6668 19.1051 32.054 17.6164 31.6877L17.1166 31.5644C16.3831 31.3835 15.6172 31.3835 14.8837 31.5644L14.3839 31.6877C12.8953 32.0547 11.3215 31.6668 10.174 30.6502L9.78891 30.3092C9.22346 29.8089 8.5455 29.4527 7.81201 29.2717L7.3122 29.1484C5.82357 28.7815 4.61046 27.7072 4.06665 26.2746L3.88418 25.7937C3.6166 25.0879 3.18098 24.4578 2.61553 23.9567L2.23039 23.6157C1.08291 22.5991 0.50809 21.0843 0.692726 19.563L0.754751 19.0526C0.845626 18.3028 0.75331 17.5428 0.485733 16.837L0.303259 16.3561C-0.24055 14.9228 -0.0450965 13.315 0.826152 12.0533L1.11825 11.6301C1.54739 11.0086 1.81929 10.2927 1.91017 9.54287L1.97219 9.03242C2.15683 7.51115 3.07784 6.17734 4.4352 5.46502L4.89102 5.22565C5.5596 4.87454 6.13298 4.36697 6.56211 3.74549L6.85421 3.32227C7.72474 2.06128 9.16 1.30786 10.6933 1.30786H11.2083C11.9634 1.30786 12.7077 1.12473 13.3763 0.77361L13.8321 0.534245C15.1902 -0.178082 16.8108 -0.178082 18.1682 0.534245Z"
                  fill="#FE3E6D"
                >
                </path>
                <path
                  d="M21.3346 12.333L14.0013 19.6663L10.668 16.333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </svg>
            </div>
          )
          : (
            <div>
              <a
                href={primaryOption.rowProps[index].link?.href}
                className={"group w-full justify-center items-center"}
              >
                <p className={"text-secondary font-bold group"}>
                  {primaryOption.rowProps[index].link?.titleSimple}
                </p>
                <div>
                  <p
                    className={"text-primary group flex flex-row font-bold text-sm"}
                  >
                    {primaryOption.rowProps[index].link?.titleColor}
                    <span
                      className={"group-hover:translate-x-4 duration-300 ease-in-out"}
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
                          fill="#FE3E6D"
                          d="M13.645 6.646l-.707-.707.707.707zm.707 0l-.707.707.707-.708zm-.707.707l.707-.708-.707.708zm4.149 4.146v1a1 1 0 0 0 .706-1.707l-.706.707zm0 1l.707.707a1 1 0 0 0-.707-1.707v1zm-4.149 4.147l.707.708-.707-.708zm0 .707l-.707.708.707-.707zm.707 0l.708.708-.708-.707zm5.003-5l.707.707-.707-.707zm0 0l.707.707-.707-.708zm.108-.163l-.924-.383v.001l.924.382zm0-.382l-.924.382.924-.382zm-.003-.008l-.918.398.918-.399zm-.105-.155l.707-.707-.707.707zm-.001 0l-.707.707.002.002.705-.71zm-5.001-4.292a.5.5 0 0 1-.707 0l1.413-1.415a1.5 1.5 0 0 0-2.12 0l1.414 1.415zm0-.708a.5.5 0 0 1 0 .708l-1.415-1.414a1.5 1.5 0 0 0 0 2.12l1.414-1.414zm4.147 4.147l-4.148-4.147L12.94 8.06l4.148 4.146 1.413-1.414zm-.706-.293H4.999v2h12.795v-2zm-12.795 0a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2zm-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm1.5 1.5h12.795v-2H4.999v2zm12.088-1.707l-4.149 4.147 1.414 1.415 4.149-4.148-1.414-1.414zm-4.149 4.147a1.5 1.5 0 0 0 0 2.122l1.415-1.415a.5.5 0 0 1 0 .708l-1.415-1.415zm0 2.122a1.5 1.5 0 0 0 2.122 0l-1.415-1.415a.5.5 0 0 1 .708 0l-1.415 1.415zm2.122 0l5.002-5.001-1.415-1.415-5.001 5.001 1.414 1.415zm5.002-5.001l-1.415-1.415 1.415 1.415zm-1.523-1.252a.5.5 0 0 1 .108-.162l1.415 1.413a1.5 1.5 0 0 0 .325-.486l-1.848-.765zm1.848.765c.074-.178.114-.372.114-.574h-2a.5.5 0 0 1 .038-.192l1.848.766zM20.5 12c0-.202-.04-.396-.114-.574l-1.848.766a.502.502 0 0 1-.038-.192h2zm-.114-.574l-.01-.024-1.834.797a.486.486 0 0 1-.004-.008l1.848-.765zm-1.74.927a.501.501 0 0 1-.104-.154l1.834-.797a1.498 1.498 0 0 0-.315-.463l-1.415 1.414zm1.415-1.414l-.003-.003-1.41 1.42-.002-.002 1.415-1.415zm-6.417-3.585l5.002 5 1.414-1.415-5.002-5-1.413 1.415z"
                          mask="url(#b)"
                        >
                        </path>
                      </svg>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          )}
      </div>
      <div className={"flex justify-center items-center w-full"}>
        {secordOption.rowProps[index].iten == "Check"
          ? (
            <div className={"flex justify-center items-center w-12"}>
              <svg width="32" height="32" fill="none">
                <path
                  d="M18.1682 0.534245L18.624 0.77361C19.2926 1.12473 20.0369 1.30786 20.792 1.30786H21.307C22.8403 1.30786 24.2756 2.06056 25.1461 3.32227L25.4382 3.74549C25.8673 4.36697 26.4407 4.87454 27.1093 5.22565L27.5651 5.46502C28.9225 6.17734 29.8435 7.51043 30.0281 9.03242L30.0902 9.54287C30.181 10.2927 30.4529 11.0086 30.8821 11.6301L31.1742 12.0533C32.0454 13.3143 32.2402 14.9228 31.6971 16.3561L31.5146 16.837C31.247 17.5428 31.1547 18.3035 31.2456 19.0526L31.3076 19.563C31.4922 21.0843 30.9174 22.5991 29.7699 23.6157L29.3848 23.9567C28.8193 24.457 28.3844 25.0879 28.1161 25.7937L27.9337 26.2746C27.3899 27.7079 26.1767 28.7822 24.6881 29.1484L24.1883 29.2717C23.4548 29.4527 22.7769 29.8081 22.2114 30.3092L21.8263 30.6502C20.6788 31.6668 19.1051 32.054 17.6164 31.6877L17.1166 31.5644C16.3831 31.3835 15.6172 31.3835 14.8837 31.5644L14.3839 31.6877C12.8953 32.0547 11.3215 31.6668 10.174 30.6502L9.78891 30.3092C9.22346 29.8089 8.5455 29.4527 7.81201 29.2717L7.3122 29.1484C5.82357 28.7815 4.61046 27.7072 4.06665 26.2746L3.88418 25.7937C3.6166 25.0879 3.18098 24.4578 2.61553 23.9567L2.23039 23.6157C1.08291 22.5991 0.50809 21.0843 0.692726 19.563L0.754751 19.0526C0.845626 18.3028 0.75331 17.5428 0.485733 16.837L0.303259 16.3561C-0.24055 14.9228 -0.0450965 13.315 0.826152 12.0533L1.11825 11.6301C1.54739 11.0086 1.81929 10.2927 1.91017 9.54287L1.97219 9.03242C2.15683 7.51115 3.07784 6.17734 4.4352 5.46502L4.89102 5.22565C5.5596 4.87454 6.13298 4.36697 6.56211 3.74549L6.85421 3.32227C7.72474 2.06128 9.16 1.30786 10.6933 1.30786H11.2083C11.9634 1.30786 12.7077 1.12473 13.3763 0.77361L13.8321 0.534245C15.1902 -0.178082 16.8108 -0.178082 18.1682 0.534245Z"
                  fill="#FE3E6D"
                >
                </path>
                <path
                  d="M21.3346 12.333L14.0013 19.6663L10.668 16.333"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                </path>
              </svg>
            </div>
          )
          : (
            <div>
              <a
                href={secordOption.rowProps[index].link?.href}
                className={"group w-full justify-center items-center"}
              >
                <p className={"text-secondary font-bold group"}>
                  {secordOption.rowProps[index].link?.titleSimple}
                </p>
                <div>
                  <p
                    className={"text-primary group flex flex-row font-bold text-sm"}
                  >
                    {secordOption.rowProps[index].link?.titleColor}
                    <span
                      className={"group-hover:translate-x-4 duration-300 ease-in-out"}
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
                          fill="#FE3E6D"
                          d="M13.645 6.646l-.707-.707.707.707zm.707 0l-.707.707.707-.708zm-.707.707l.707-.708-.707.708zm4.149 4.146v1a1 1 0 0 0 .706-1.707l-.706.707zm0 1l.707.707a1 1 0 0 0-.707-1.707v1zm-4.149 4.147l.707.708-.707-.708zm0 .707l-.707.708.707-.707zm.707 0l.708.708-.708-.707zm5.003-5l.707.707-.707-.707zm0 0l.707.707-.707-.708zm.108-.163l-.924-.383v.001l.924.382zm0-.382l-.924.382.924-.382zm-.003-.008l-.918.398.918-.399zm-.105-.155l.707-.707-.707.707zm-.001 0l-.707.707.002.002.705-.71zm-5.001-4.292a.5.5 0 0 1-.707 0l1.413-1.415a1.5 1.5 0 0 0-2.12 0l1.414 1.415zm0-.708a.5.5 0 0 1 0 .708l-1.415-1.414a1.5 1.5 0 0 0 0 2.12l1.414-1.414zm4.147 4.147l-4.148-4.147L12.94 8.06l4.148 4.146 1.413-1.414zm-.706-.293H4.999v2h12.795v-2zm-12.795 0a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2zm-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm1.5 1.5h12.795v-2H4.999v2zm12.088-1.707l-4.149 4.147 1.414 1.415 4.149-4.148-1.414-1.414zm-4.149 4.147a1.5 1.5 0 0 0 0 2.122l1.415-1.415a.5.5 0 0 1 0 .708l-1.415-1.415zm0 2.122a1.5 1.5 0 0 0 2.122 0l-1.415-1.415a.5.5 0 0 1 .708 0l-1.415 1.415zm2.122 0l5.002-5.001-1.415-1.415-5.001 5.001 1.414 1.415zm5.002-5.001l-1.415-1.415 1.415 1.415zm-1.523-1.252a.5.5 0 0 1 .108-.162l1.415 1.413a1.5 1.5 0 0 0 .325-.486l-1.848-.765zm1.848.765c.074-.178.114-.372.114-.574h-2a.5.5 0 0 1 .038-.192l1.848.766zM20.5 12c0-.202-.04-.396-.114-.574l-1.848.766a.502.502 0 0 1-.038-.192h2zm-.114-.574l-.01-.024-1.834.797a.486.486 0 0 1-.004-.008l1.848-.765zm-1.74.927a.501.501 0 0 1-.104-.154l1.834-.797a1.498 1.498 0 0 0-.315-.463l-1.415 1.414zm1.415-1.414l-.003-.003-1.41 1.42-.002-.002 1.415-1.415zm-6.417-3.585l5.002 5 1.414-1.415-5.002-5-1.413 1.415z"
                          mask="url(#b)"
                        >
                        </path>
                      </svg>
                    </span>
                  </p>
                </div>
              </a>
            </div>
          )}
      </div>
    </div>
  );
}

export default function TableInfos(
  { title, primaryOption, secordOption }: TableProps,
) {
  return (
    <div className={"px-6 py-12 bg-gray-100 grid grid-cols-12"}>
      <h3
        className={"text-[2.2rem] leading-[2.7rem] text-secondary my-6 col-start-1 xl:col-start-2 col-end-10 xl:text-7xl"}
      >
        {title.titleSimple}
        <span className={"font-bold text-primary"}>{title.titleColor}</span>
      </h3>
      <div className={"md:hidden col-start-1 xl:col-start-2 col-end-[-1] xl:col-end-[-2] row-start-2"}>
        <MenuTable
          title={title}
          primaryOption={primaryOption}
          secordOption={secordOption}
        />
      </div>
      <div className={"md:flex hidden flex-col col-start-1 xl:col-start-2 col-end-[-1] xl:col-end-[-2]"}>
        <div
          className={"grid grid-cols-[100%_200px_200px] flex-row justify-end py-5 px-8"}
        >
          <div className={"flex justify-center items-center col-start-2"}>
            <p className={"font-bold text-secondary text-lg"}>
              {primaryOption.title}
            </p>
          </div>
          <div className={"flex justify-center items-center col-start-3"}>
            <p className={"font-bold text-secondary text-lg"}>
              {secordOption.title}
            </p>
          </div>
        </div>
        <div className={" flex flex-col bg-base-100 p-8 rounded-lg "}>
          {primaryOption.rowProps.map((row, index) => {
            return (
              <RowTable
                primaryOption={primaryOption}
                secordOption={secordOption}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
