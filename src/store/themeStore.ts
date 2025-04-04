import { create } from "zustand";
import { ThemesType } from "../@types";
import { persist } from "zustand/middleware";

export const Themes = create(
  persist<ThemesType>((set) => ({
      theme: "dark",
      setTheme: (theme) => {
        set({ theme });
      },
    }),
    { name: "theme" })
);
