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
          <div className="text-xl font-semibold">
            <p class="leading-relaxed">CCRC IT Club is a student-led club in CCRC.</p>
            <p>dedicated to IT, Computer science and technology</p>
            <br />
            <p>Being established in 2068BS,</p>
            <p>
              we aim to foster a culture of innovation and learning in the field of technology among
              students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
