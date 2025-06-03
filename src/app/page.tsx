import AboutMe from "@/components/AboutMe";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <AboutMe />
    </MaxWidthWrapper>
  );
}
