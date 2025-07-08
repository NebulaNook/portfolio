import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="px-4 py-12 lg:px-32">
      <div className="text-center mb-10">
        <p className="text-lg sm:text-xl text-gray-600">Explore My</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-black">
          Experience
        </h1>
      </div>

      {/* Tech Icons */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-4xl sm:text-6xl lg:text-7xl mb-12">
        <SiHtml5 className="text-red-600" />
        <SiCss3 className="text-blue-500" />
        <SiJavascript className="text-yellow-400" />
        <FaReact className="text-blue-500" />
        <SiTailwindcss className="text-teal-500" />
        <SiNodedotjs className="text-green-600" />
        <SiExpress className="text-black" />
        <SiMongodb className="text-green-700" />
        <SiPython className="text-yellow-500" />
        <SiDjango className="text-green-800" />
        <SiPostgresql className="text-blue-700" />
        <SiTypescript className="text-blue-400" />
        <SiNextdotjs className="text-black" />
      </div>

      {/* Skills Card */}
      <div className="border-2 border-black rounded-lg p-8 max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 text-lg sm:text-xl">
          <div>
            <p className="font-medium">&#10003; HTML</p>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
          <div>
            <p className="font-medium">&#10003; CSS</p>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
          <div>
            <p className="font-medium">&#10003; JavaScript</p>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
          <div>
            <p className="font-medium">&#10003; React JS</p>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
          <div>
            <p className="font-medium">&#10003; Tailwind CSS</p>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
          <div>
            <p className="font-medium">&#10003; Node.js</p>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
          <div>
            <p className="font-medium">&#10003; Express.js</p>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
          <div>
            <p className="font-medium">&#10003; MongoDB</p>
            <p className="text-sm text-gray-600">Experienced</p>
          </div>
          <div>
            <p className="font-medium">&#10003; Python</p>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
          <div>
            <p className="font-medium">&#10003; Django</p>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
          <div>
            <p className="font-medium">&#10003; PostgreSQL</p>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
          <div>
            <p className="font-medium">&#10003; TypeScript</p>
            <p className="text-sm text-gray-600">Currently Exploring</p>
          </div>
          <div>
            <p className="font-medium">&#10003; Next.js</p>
            <p className="text-sm text-gray-600">Intermediate</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-4 text-justify text-base sm:text-lg leading-relaxed">
        <p className="text-lg sm:text-xl font-semibold text-gray-800">
          I am experienced in building responsive and dynamic web applications
          using HTML, CSS, JavaScript, and React.js. Tailwind CSS is my go-to
          for rapid styling and clean layouts. On the backend, I have
          intermediate-level experience working with Node.js and Express.js, and
          I’m confident using MongoDB to manage databases in full-stack
          applications. Additionally, I’ve worked with Python and Django at an
          intermediate level for building RESTful APIs and backend logic. I’m
          currently exploring PostgreSQL, TypeScript, and Next.js to expand my
          stack and prepare for more advanced, scalable applications. My goal is
          to continually improve and adapt to industry standards by learning and
          building meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default Experience;
