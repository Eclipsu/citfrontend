import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>404 — Page Not Found | CCRC IT Club</title>
      </Head>
      <Image
        src={"/404-page.png"}
        alt="404-page-not-found"
        width={200}
        height={200}
        className="mb-6"
      />
      <div className="px-5 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold text-slate-900">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:underline mt-4">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
