"use client";

import laptopBody from "@/assets/laptop_frame/laptop-body.svg";
import laptopScreen from "@/assets/laptop_frame/laptop-screen.svg";
import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import cn from "@/utils/cn";
import { Button, buttonVariants } from "../ui/Button";

export type ProjectItemProps = {
  className?: string;
  projectImage: string | StaticImageData;
  title: string;
  description: string;
  brandColorHex: string;
  link: string;
  githubLink?: string;
  usedTech: string[] | StaticImageData[];
};

const ProjectItem = ({
  className,
  projectImage,
  title,
  description,
  brandColorHex,
  link,
  githubLink,
  usedTech,
}: ProjectItemProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <>
      <div
        className={cn(
          `flex flex-col lg:flex-row px-5 lg:items-stretch items-center w-full gap-y-7 ${
            isInView ? "animate-fadeIn" : "opacity-0"
          }`,
          className
        )}
        ref={ref}
      >
        <div className="w-full px-8 md:px-20 lg:px-0">
          <div className="relative mx-7 lg:mx-8">
            <div className="absolute inset-0 px-4 pt-2 pb-6 md:pt-3 md:pb-9 lg:pt-2 lg:pb-6">
              <Image
                className="object-cover w-full h-full rounded-md border border-white"
                src={projectImage}
                alt="project image"
              />
            </div>

            <Image
              className="w-full"
              src={laptopScreen}
              alt="laptop frame screen"
            />
          </div>

          <Image className="w-full" src={laptopBody} alt="laptop frame body" />
        </div>

        <div className="flex flex-col items-center w-full gap-y-7 lg:justify-between lg:py-2 md:px-8">
          <div className="flex flex-col items-center lg:items-start px-12 lg:px-0 w-full">
            <h2
              style={{ color: brandColorHex }}
              className="flex text-gray-700 font-semibold text-2xl tracking-wider lg:mt-0 hover:scale-105 ease-in-out duration-150"
            >
              {title.toLowerCase() == "casecobra" ? (
                <>
                  <span className="text-gray-700">Case</span>Cobra
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-gray-500 w-full text-justify mt-3">
              {description}
            </p>
          </div>

          <ul className="flex flex-wrap justify-center w-full gap-5">
            {usedTech.map((t) => (
              <li
                key={Math.random()}
                className="ease-in duration-200 hover:scale-110"
              >
                {
                  <Image
                    className="h-10 w-10 cursor-pointer"
                    src={t}
                    alt="Tech"
                  />
                }
              </li>
            ))}
          </ul>

          <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-x-6 items-center w-1/2 lg:w-full">
            <Link
              href={link}
              className={cn(buttonVariants({}), "bg-custom-green w-full")}
            >
              Visit
              <ExternalLink className="ml-1" size={15} />
            </Link>
            {githubLink ? (
              <Link
                href={githubLink}
                className={cn(buttonVariants({}), "bg-custom-green w-full")}
              >
                GitHub
                <ExternalLink className="ml-1" size={15} />
              </Link>
            ) : (
              <Button disabled className="bg-custom-green w-full">
                GitHub&nbsp;(N/A)
                <ExternalLink className="ml-1" size={15} />
              </Button>
            )}
          </div>
        </div>
      </div>

      <hr className="h-2 m-6 w-1/3 border-slate-300 border-t-2 lg:hidden" />
    </>
  );
};

export default ProjectItem;
