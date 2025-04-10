export const COLORS = {
  background: [
    { name: "white", color: "#ffffff" },
    { name: "lightGray", color: "#F2F2F2" },
    { name: "gray", color: "#CCCCCC" },
    { name: "darkGray", color: "#999999" },
    { name: "charcoalGray", color: "#666666" },
    { name: "custom", color: "custom" },
  ] as const,

  accent: [
    { name: "pink", color: "#FFCDCD" },
    { name: "blue", color: "#0C1083" },
    { name: "lightBlue", color: "#53E5FF" },
    { name: "custom", color: "custom" },
  ] as const,

  text: [
    { name: "white", color: "#ffffff" },
    { name: "darkBlue", color: "#0D1292" },
    { name: "black", color: "#000000" },
    { name: "custom", color: "custom" },
  ] as const,
};

export const CornerButtons: { name: string; radius: RadiusValues }[] = [
  {
    name: "none",
    radius: "none",
  },
  {
    name: "sm",
    radius: "sm",
  },
  {
    name: "md",
    radius: "md",
  },
  {
    name: "lg",
    radius: "lg",
  },
  {
    name: "full",
    radius: "full",
  },
];

export const Fonts: { name: string; value: SupportedFonts }[] = [
  { name: "Manrope", value: "Manrope" },
  { name: "Inter", value: "Inter" },
  { name: "JetBrains", value: "JetBrains Mono" },
  { name: "Lora", value: "Lora" },
];

export type LoginMethodType = Array<
  | "wallet"
  | "email"
  | "sms"
  | "google"
  | "twitter"
  | "discord"
  | "github"
  | "passkey"
>;

export type SupportedFonts = "Manrope" | "Inter" | "JetBrains Mono" | "Lora";

export type ColorType = "background" | "accent" | "text";
export type BackgroundColor = (typeof COLORS.background)[number]["name"];
export type AccentColor = (typeof COLORS.accent)[number]["name"];
export type TextColor = (typeof COLORS.text)[number]["name"];
export const CUSTOM_GRADIENT =
  "conic-gradient(from 180deg at 50% 50%, #0D1292 0deg, #FFCDCD 180deg, #53E5FF 360deg)";
export type RadiusValues = "sm" | "md" | "lg" | "none" | "full";
