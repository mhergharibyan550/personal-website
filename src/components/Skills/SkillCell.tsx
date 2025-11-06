"use client";

import Image, { StaticImageData } from "next/image";
import cn from "@/utils/cn";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";

export type SkillProps = {
  src: string | StaticImageData;
  skillName: string;
  link: string;
  className?: string;
};

const SkillCell = ({ className, src, skillName, link }: SkillProps) => {
  const { ref, isInView } = useInView<HTMLAnchorElement>();
  return (
    <Link
      href={link}
      target="_blank"
      aria-label={skillName}
      className={cn(
        "flex items-center justify-center gap-1 bg-white border text-gray-800 rounded-md py-2 px-3",
        `${isInView ? "animate-fadeIn" : "opacity-0"}`,
        className
      )}
      ref={ref}
    >
      <Image
        className="rounded-sm"
        src={src}
        height={25}
        width={25}
        alt="icon"
      />
      <p>{skillName}</p>
    </Link>
  );
};

export default SkillCell;
