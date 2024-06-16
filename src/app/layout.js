import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Kampung",
  description: "tempatnya makan murah dan nikmat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
