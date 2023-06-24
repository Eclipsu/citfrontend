import "./globals.css";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";

// Ui components
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CCRC IT Club",
  description:
    "CCRC IT Club: Making a difference | High School IT Club\nJoin CCRC IT Club, an innovative high school club focused on technology. Explore and learn with us!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
