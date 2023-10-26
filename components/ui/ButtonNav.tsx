import { Children, useState } from "preact/compat";

export interface Props {
  itensMenu: {
    label: string;
    href: string;
  }[];
}

export default function ButtonNav({ itensMenu }: Props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`w-[24px] h-[24px] flex flex-col  duration-300 ease-in-out ${
          isOpen ? "justify-center items-center" : "justify-around items-end"
        }`}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <span
          className={`w-[24px] h-[1px] bg-primary rounded-md duration-300 ease-in-out ${
            isOpen ? "rotate-45 " : "rotate-0"
          }`}
        >
        </span>
        <span
          className={`w-[18px] h-[1px] bg-primary rounded-md duration-300 ease-in-out ${
            isOpen ? "-rotate-45 w-[24px] " : "rotate-0"
          }`}
        >
        </span>
      </div>
      <div
        className={`absolute top-[64px] bg-base-100 h-screen z-40 w-full left-0 p-6 duration-500 ease-in ${
          isOpen ? "translate-y-[0]" : "translate-y-[-110%] "
        }`}
      >
        <div className={"text-secondary"}>
          <ul>
            {itensMenu.map((link, index) => {
              return (
                <li
                  style={`transition-delay: 0.${index + 1}s`}
                  className={`mt-6 first:mt-0 duration-300 ${
                    isOpen
                      ? "translate-y-[0] opacity-100"
                      : "translate-y-[-120%] opacity-0"
                  }`}
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
}
