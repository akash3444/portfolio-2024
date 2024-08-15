import {
  NextIcon,
  NextUiIcon,
  ReactIcon,
  ReduxIcon,
  ShadCnUiIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./Icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const technologies = [
  {
    name: "React.js",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Shadcn UI",
    icon: ShadCnUiIcon,
  },
  {
    name: "Next UI",
    icon: NextUiIcon,
  },
  {
    name: "Redux",
    icon: ReduxIcon,
  },
];

const TechStack = () => {
  return (
    <div className="flex items-center gap-4 text-primary">
      {technologies.map(({ name, icon: Icon }) => (
        <Tooltip key={name}>
          <TooltipTrigger>
            <Icon />
          </TooltipTrigger>
          <TooltipContent side="bottom" className="font-medium shadow">
            {name}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default TechStack;
