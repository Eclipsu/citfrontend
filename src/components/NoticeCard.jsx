import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

export default function CodeBlock(props) {
  return (
    <div className="flex items-center justify-between bg-slate-100 my-5 p-2 shadow-lg hover:bg-slate-300 transition-all ease-in cursor-pointer font-semibold text-xl">
      <Link href={`/notice/${props.slug}`}>{props.children}</Link>
      <HiPlusCircle className="text-gray-800" />
    </div>
  );
}
