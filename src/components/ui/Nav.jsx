import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.svg";

export default function Nav() {
  return (
    <header className="text-gray-600 body-font shadow-lg w-screen">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Image
          className="cursor-pointer"
          src={Logo}
          alt="CCRC IT Club logo"
          height={40}
          width={40}
        />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"#"} className="mr-5 hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link href={"#"} className="mr-5 hover:text-blue-500 transition duration-300">
            Members
          </Link>
          <Link href={"#"} className="mr-5 hover:text-blue-500 transition duration-300">
            Events
          </Link>
          <Link href={"#"} className="mr-5 hover:text-blue-500 transition duration-300">
            Notice
          </Link>
        </nav>
      </div>
    </header>
  );
}
