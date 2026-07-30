import { ElementType, ReactNode } from "react";
import clsx from "clsx";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body"
  | "body-sm"
  | "button"
  | "caption"
  | "overline";

type Color = "primary" | "secondary" | "text-primary" | "white" | "inherit";

type Weight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black"
  | "heavy";

interface TypographyProps {
  variant?: Variant;
  as?: ElementType;
  color?: Color;
  weight?: Weight;
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  h1: "font-gilroy text-[36px] sm:text-[48px] lg:text-[60px] xl:text-[72px] leading-tight",
  h2: "font-gilroy text-[30px] sm:text-[36px] lg:text-[48px] xl:text-[60px] leading-tight",
  h3: "font-gilroy text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[48px] leading-tight",
  h4: "font-gilroy text-[20px] sm:text-[24px] lg:text-[30px] xl:text-[36px] leading-snug",
  h5: "font-gilroy text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[30px] leading-snug",
  h6: "font-gilroy text-[16px] sm:text-[18px] lg:text-[20px] leading-snug",

  "body-lg": "font-gilroy text-[16px] sm:text-[18px] leading-[28px]",
  body: "font-gilroy text-[14px] sm:text-[16px] leading-[28px]",
  "body-sm": "font-gilroy text-[12px] leading-[24px]",

  button: "font-gilroy text-[12px] sm:text-[14px] uppercase",
  caption: "font-gilroy text-[12px] leading-[20px]",
  overline: "font-gilroy text-[12px] uppercase tracking-[0.1em]",
};

const colorStyles: Record<Color, string> = {
  primary: "text-primary",
  "text-primary": "text-text-primary",
  secondary: "text-secondary",
  white: "text-white",
  inherit: "text-inherit",
};

const weightStyles: Record<Weight, string> = {
  thin: "font-thin", // 100
  extralight: "font-extralight", // 200
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
  extrabold: "font-extrabold", // 800
  black: "font-black", // 900
  heavy: "[font-weight:950]", // 950
};

const defaultTag: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",

  "body-lg": "p",
  body: "p",
  "body-sm": "p",

  button: "span",
  caption: "span",
  overline: "span",
};

export default function Typography({
  variant = "body",
  as,
  color = "text-primary",
  weight = "normal",
  align = "left",
  className,
  children,
}: TypographyProps) {
  const Component = as ?? defaultTag[variant];

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        colorStyles[color],
        weightStyles[weight],
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
          "text-justify": align === "justify",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}
