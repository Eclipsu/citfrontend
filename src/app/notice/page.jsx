import { fetchAllNotice } from "@/utils/fetchNotice";

export const metadata = {
  title: "Notice | CCRC IT Club",
  description:
    "CCRC IT Club: Making a difference | Notice\nStay informed and engaged with our club's announcements, important messages, and exciting opportunities",
};

export default async function Home() {
  const notices = await fetchAllNotice();
  return (
    <div className="mx-auto max-w-7xl mt-24 px-6 lg:px-8">
      <h1 className="text-4xl my-2">Notice</h1>
      <div className="mx-2 p-7 rounded-lg shadow bg-gray-50">
        {notices.data.map((notice) => {
          return <h2 className="text-xl font-semibold">{notice.attributes.title}</h2>;
        })}
      </div>
    </div>
  );
}
