import { cn } from "../../../utils";

const LinkedInLogo = ({
  className,
  width,
  height,
}: {
  className?: string;
  width: number;
  height: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "transition-all hover:scale-105 text-custom-blue hover:text-slate-700",
        className
      )}
    >
      <g clipPath="url(#clip0_38_400)">
        <path
          d="M46.2988 0H3.69141C1.65039 0 0 1.61133 0 3.60352V46.3867C0 48.3789 1.65039 50 3.69141 50H46.2988C48.3398 50 50 48.3789 50 46.3965V3.60352C50 1.61133 48.3398 0 46.2988 0ZM14.834 42.6074H7.41211V18.7402H14.834V42.6074ZM11.123 15.4883C8.74023 15.4883 6.81641 13.5645 6.81641 11.1914C6.81641 8.81836 8.74023 6.89453 11.123 6.89453C13.4961 6.89453 15.4199 8.81836 15.4199 11.1914C15.4199 13.5547 13.4961 15.4883 11.123 15.4883ZM42.6074 42.6074H35.1953V31.0059C35.1953 28.2422 35.1465 24.6777 31.3379 24.6777C27.4805 24.6777 26.8945 27.6953 26.8945 30.8105V42.6074H19.4922V18.7402H26.6016V22.002H26.6992C27.6855 20.127 30.1074 18.1445 33.7109 18.1445C41.2207 18.1445 42.6074 23.0859 42.6074 29.5117V42.6074Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_38_400">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedInLogo;
