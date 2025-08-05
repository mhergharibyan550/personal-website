"use client";

import Image, { StaticImageData } from "next/image";
import cn from "@/utils/cn";
import { useInView } from "@/hooks/useInView";

export type SkillProps = {
  src: string | StaticImageData;
  skillName: string;
  className?: string;
};

const SkillCell = ({ className, src, skillName = "Skill" }: SkillProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <div
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
    </div>
  );
};

export default SkillCell;
