import Image from "next/image";
import Logo from "@/../public/logo.svg";
export default function components() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image class="object-cover object-center rounded" alt="CCRC hero" src={Logo} />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            CCRC IT Club
          </h1>
          <p class="mb-8 leading-relaxed">
            KUCC is a non-profit, independent club formed by students of the Department of Computer
            Science and Engineering in the year 1997. Being registered as the first club of
            Kathmandu University with the registration number 001/1997 in the Student Welfare, KUCC
            has worked in the field of ICT for twenty years. KUCC has more than 1000 members from
            Department of Computer Science and Engineering. Kathmandu University Computer Club
            (KUCC) is a student wing of the Department of Computer Science and Engineering which was
            established with a goal to engage and aware students in the technological research and
            development, most prominently in the ICT field and at the same time provides a common
            platform for young and aspiring individuals to exhibit their ideas. Every year KUCC
            cooperates and organizes numerous competitive as well as non-competitive events like
            seminars, exhibitions, hackathon, skill development program and tutorial sessions to
            name a few, with an unwavering intention to promote, develop and encourage emerging
            technological advancement.
          </p>
        </div>
      </div>
    </section>
  );
}
