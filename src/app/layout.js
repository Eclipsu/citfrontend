import "./globals.css";
import { Inter } from "next/font/google";

// Ui components
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CCRC IT Club",
  description:
    "CCRC IT Club is a high school club dedicated to IT, technology, and computer science. We are a part of CCRC and our aim is to foster a culture of innovation and learning in the field of technology among students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        <div className="bg-slate-50">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
