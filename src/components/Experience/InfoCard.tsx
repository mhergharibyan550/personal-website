"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LinkIcon } from "../ui/icons";
import { useInView } from "@/hooks/useInView";
import { cn } from "../../../lib/utils";

export type InfoCardProps = {
  src: string | StaticImageData;
  companyName: string;
  role: string;
  duration: string;
  brandColorHex: string;
  descriptions: Array<string>;
  link: string;
  className?: string;
  position?: "left" | "right";
};

const InfoCard = ({
  src,
  companyName,
  role,
  duration,
  brandColorHex,
  descriptions,
  link,
  className,
  position = "left",
}: InfoCardProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <>
      <div
        ref={ref}
        className={cn(
          `flex flex-col items-center max-w-96 md:max-w-full md:w-full md:my-5 border rounded-md py-6 px-3 bg-white shadow-lg ease-in duration-150 hover:scale-105 ${
            isInView ? "animate-fadeIn" : "opacity-0"
          } ${
            position == "left"
              ? "md:items-start md:pl-16"
              : "md:items-end md:pr-16"
          }`,
          className
        )}
      >
        <div
          className={`flex flex-col md:flex-row items-center ${
            position == "right" && "md:flex-row-reverse"
          }`}
        >
          <Image
            className="transition-transform hover:scale-105 ease-in-out duration-150 object-contain"
            src={src}
            height={65}
            alt="Solicy Logo"
          />

          <div
            className={`flex flex-col justify-center items-center ${
              position == "left"
                ? "md:items-start md:ml-5"
                : "md:items-end md:mr-5"
            }`}
          >
            <Link
              href={link}
              className="flex text-gray-700 font-bold text-xl tracking-wider mt-3 md:mt-0 hover:scale-105 ease-in-out duration-150"
            >
              {companyName}
              <LinkIcon height={15} width={15} />
            </Link>
            <h4
              style={{ color: brandColorHex }}
              className="font-semibold text-lg tracking-wider hover:scale-105 ease-in-out duration-150"
            >
              {role}
            </h4>
            <p className="text-gray-600 font-medium tracking-wide">
              {duration}
            </p>
          </div>
        </div>

        <ul className="flex flex-col gap-y-2 mt-5">
          {descriptions.map((desc, i) => (
            <li
              className="text-black-700 leading-relaxed tracking-wider text-sm md:text-base"
              key={i}
            >
              <span className="text-custom-green">◈ </span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-2 m-6 w-1/3 border-slate-300 border-t-2 md:hidden" />
    </>
  );
};

export default InfoCard;
