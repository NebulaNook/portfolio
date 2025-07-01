import Details from "./Details";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      {/* Experience & Education Cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
        <div className="border-2 border-black rounded-xl w-full max-w-xs sm:max-w-sm lg:max-w-md lg:h-40 bg-blue-100 flex flex-col items-center justify-center p-6 mx-auto">
          <div className="flex justify-center mb-2 mt-3">
            <FaBriefcase className="text-2xl" />
          </div>
          <p className="font-bold text-xl">Experience</p>
          <p className="text-xl">Intermediate</p>
          <p className="text-xl">Full-Stack Developer</p>
        </div>

        <div className="border-2 border-black rounded-xl w-full max-w-xs sm:max-w-sm lg:max-w-md lg:h-40 bg-yellow-100 flex flex-col items-center justify-center p-6 mx-auto">
          <div className="flex justify-center mb-2 mt-3">
            <FaGraduationCap className="text-2xl" />
          </div>
          <p className="font-bold text-xl">Education</p>
          <p className="text-xl">BCA - Tribhuvan University</p>
          <p className="text-xl">7th Sem</p>
        </div>
      </div>

      {/* Contact Details Section */}
      <Details />

      {/* Footer Navigation & Copyright */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">&copy; 2025 Kaushal Neupane. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
