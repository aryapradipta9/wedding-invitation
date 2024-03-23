import {
  Dancing_Script,
  Special_Elite,
  Montserrat,
  Zilla_Slab,
  Arizonia,
  Forum,
} from "next/font/google";
import localFont from "next/font/local";

export const specialElite = Zilla_Slab({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export const dancingScript = Arizonia({
  weight: "400",
  subsets: ["latin"],
});

export const sansSerif = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

export const forum = Forum({
  weight: "400",
  subsets: ["latin"],
});

export const theSeason = localFont({ src: "../fonts/theseason.otf" });
