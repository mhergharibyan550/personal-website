"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { LinkIcon } from "./ui/icons";
import { useInView } from "@/hooks/useInView";

export interface InfoCardProps {
  src: string | StaticImageData;
  companyName: string;
  role: string;
  duration: string;
  brandColorHex: string;
  descriptions: Array<string>;
  link: string;
}

const InfoCard = ({
  src,
  companyName,
  role,
  duration,
  brandColorHex,
  descriptions,
  link,
}: InfoCardProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col items-center w-96 border rounded-md py-6 px-3 bg-white shadow-lg ease-in-out duration-150 hover:scale-105 ${
          isInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Image
          className="transition-transform hover:scale-105 ease-in-out duration-150"
          src={src}
          height={65}
          alt="Solicy Logo"
        />
        <Link
          href={link}
          className="flex text-gray-700 font-bold text-xl tracking-wider mt-3 hover:scale-105 ease-in-out duration-150"
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
        <p className="text-gray-600 font-medium tracking-wide">{duration}</p>
        <ul className="flex flex-col gap-y-2 mt-5">
          {descriptions.map((desc, i) => (
            <li
              className="text-black-700 leading-relaxed tracking-wider text-sm"
              key={i}
            >
              <span className="text-custom-green">◈ </span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-2 m-6 w-1/3 border-slate-300 border-t-2" />
    </>
  );
};

export default InfoCard;
