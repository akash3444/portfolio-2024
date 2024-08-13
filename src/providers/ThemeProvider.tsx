"use client";

import { themes } from "@/utils/theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { FC } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => (
  <NextThemesProvider defaultTheme="red" themes={themes} {...props} />
);
