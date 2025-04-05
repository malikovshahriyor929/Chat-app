import { create } from "zustand";
import { ThemesType } from "../@types";

export const Themes = create<ThemesType>((set) => ({
  theme: localStorage.getItem("theme") || "dark",
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("theme", theme);
  },
}));
