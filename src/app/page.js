import Main from "@/app/components/Main";
import Members from "@/app/components/Members";
import Testimonial from "@/app/components/Testimonial";
import Statistics from "@/app/components/Statistics";

export default function Home() {
  return (
    <>
      <Main className="flex min-h-screen justify-between p-24 " />
      <Statistics />
      <Members />
      <Testimonial />
    </>
  );
}
