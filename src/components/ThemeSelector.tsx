"use client";

import { cn } from "@/lib/utils";
import { themes } from "@/utils/theme";
import { PopoverClose } from "@radix-ui/react-popover";
import { useTheme } from "next-themes";
import { CloseIcon, PaletteIcon } from "./Icons";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ThemeSelector = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <PaletteIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="dark">
        <div className="mb-4 flex items-center justify-between">
          <h6>Choose the theme</h6>
          <PopoverClose asChild>
            <Button variant="ghost" size="icon">
              <CloseIcon />
            </Button>
          </PopoverClose>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {themes.map((color) => (
            <Button
              key={color}
              variant="outline"
              className={cn(
                "justify-start px-3 capitalize text-muted-foreground",
                {
                  "text-primary-foreground ring-1 ring-primary-foreground ring-offset-0 ring-offset-background":
                    theme === color,
                },
              )}
              onClick={() => setTheme(color)}
            >
              <div
                className="h-6 w-6 shrink-0 rounded-full bg-primary"
                data-theme={color}
              />
              {color}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSelector;
