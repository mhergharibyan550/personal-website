"use client";

import laptopBody from "@/assets/laptop_frame/laptop-body.svg";
import laptopScreen from "@/assets/laptop_frame/laptop-screen.svg";
import { useInView } from "@/hooks/useInView";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "../../../lib/utils";
import { Button, buttonVariants } from "../ui/Button";
import { LinkIcon } from "../ui/icons";

export type ProjectItemProps = {
  className?: string;
  projectImage: string | StaticImageData;
  title: string;
  description: string;
  brandColorHex: string;
  link: string;
};

const ProjectItem = ({
  className,
  projectImage,
  title,
  description,
  brandColorHex,
  link,
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
        <div className="w-full">
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

        <div className="flex flex-col items-center w-full gap-y-7 lg:justify-between lg:py-2 px-8">
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
            <p className="text-gray-500 text-start w-full mt-3">
              {description}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-3 lg:mb-5 lg:gap-x-6 items-center w-1/2 lg:w-full">
            <Link
              href={link}
              className={cn(buttonVariants({}), "bg-custom-green w-full")}
            >
              Visit <LinkIcon width={25} height={25} />
            </Link>
            <Button className="bg-custom-green w-full">Learn More</Button>
          </div>
        </div>
      </div>

      <hr className="h-2 m-6 w-1/3 border-slate-300 border-t-2 lg:hidden" />
    </>
  );
};

export default ProjectItem;
