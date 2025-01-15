import type { Metadata } from "next";
import { Jersey_15 } from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "Wellcome to Yang Byeori's portpolio",
  description: "Wellcome to my portpolio! ",
};

 
const jersey = Jersey_15({
  weight: "400"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jersey.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
