import { fetchNotice, fetchAllNotice } from "@/utils/fetchNotice";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { convertMarkdownToPlainText } from "@/utils/markdownToText";

export async function generateMetadata({ params: { slug } }) {
  const data = await fetchNotice(slug);
  if (!data) return notFound();
  return {
    title: `${data.title} — Notice | CCRC IT Club`,
    description: convertMarkdownToPlainText(data.body),
  };
}

export default async function notice({ params: { slug } }) {
  const data = await fetchNotice(slug);
  if (!data) return notFound();
  return (
    <div className="mx-auto max-w-7xl mt-24 px-6 lg:px-8">
      <h1 className="text-4xl my-2">Notice</h1>
      <div className="mx-2 p-7 rounded-lg shadow bg-gray-50">
        <h2 className="text-xl font-semibold">{data.title}</h2>
        <ReactMarkdown
          className="mt-5 text-lg table-auto markdown"
          children={data.body}
          remarkPlugins={[remarkGfm]}
        />
        <h2 className="text-lg font-medium">
          Posted by:&nbsp;
          {data.createdBy.firstname}&nbsp;
          {data.createdBy.lastname}
        </h2>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const notices = await fetchAllNotice();
  if (!notices.data) {
    return {
      title: "404 Not Found",
    };
  }
  return notices.data.map((notice) => {
    slug: notice.attributes.slug;
  });
}
