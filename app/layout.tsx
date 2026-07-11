import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MJ.FIT.IR | Elite Fitness Coach",
  description:
    "Mohammad Jalali | Elite Online Fitness Coach | Workout & Nutrition",
  keywords: [
    "MJ",
    "Fitness",
    "Gym",
    "Workout",
    "Nutrition",
    "Mohammad Jalali",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
