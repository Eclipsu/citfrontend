import Main from "@/app/components/Main";
import Members from "@/app/components/Members";
import Testimonial from "@/app/components/Testimonial";
import Statistics from "@/app/components/Statistics";

export default function Home() {
  return (
    <>
      <Main className="flex min-h-screen flex-col items-center justify-between p-24" />
      <Members />
      <Statistics />
      <Testimonial />
    </>
  );
}
