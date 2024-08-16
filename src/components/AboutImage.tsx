import { Macbook } from "./Abstracts";

const AboutImage = () => (
  <div className="relative hidden aspect-[16/15] w-full shrink-0 overflow-hidden rounded-2xl bg-card md:max-w-sm lg:block lg:max-w-md">
    <Macbook className="w-full" />
  </div>
);

export default AboutImage;
