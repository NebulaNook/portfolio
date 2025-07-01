import cloud from "../assets/Images/cloud.jpg";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xl">Get to know more</p>
        <h1 className="text-3xl font-bold">About Me</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Image */}
        <img
          src={cloud}
          alt="photo"
          className="rounded-xl mx-auto w-full max-w-xs lg:max-w-full h-auto border-2"
        />

        {/* Experience Card */}
        <div className="border-2 border-black rounded-xl w-full max-w-xs mx-auto bg-blue-100 p-6 flex flex-col items-center">
          <FaBriefcase className="text-3xl mb-4 text-blue-700" />
          <p className="font-bold text-xl mb-1">Experience</p>
          <p className="text-lg">Basic</p>
          <p className="text-lg">Frontend Developer</p>
        </div>

        {/* Education Card */}
        <div className="border-2 border-black rounded-xl w-full max-w-xs mx-auto bg-yellow-100 p-6 flex flex-col items-center">
          <FaGraduationCap className="text-3xl mb-4 text-yellow-700" />
          <p className="font-bold text-xl mb-1">Education</p>
          <p className="text-lg">BCA - Tribhuvan University</p>
          <p className="text-lg">Running</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 max-w-4xl mx-auto text-left text-lg leading-relaxed px-2 lg:px-0">
        <p>
          I&apos;m eager to pursue a career in frontend development! It&apos;s about creating the visual
          and interactive parts of websites and apps using HTML, CSS, JavaScript, React, and Tailwind.
          I&apos;m familiar with these languages and excited to deepen my skills. My goal is to become
          proficient in building user-friendly interfaces and solving design challenges. I&apos;m passionate
          about this field and ready to invest the time and effort needed to succeed in my career as a frontend developer.
        </p>
      </div>
    </section>
  );
};

export default About;
