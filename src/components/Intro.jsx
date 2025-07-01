import sunflower from '../assets/Images/sunflower.jpg';
import { FaInstagram, FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-10 gap-10">
      {/* Image Section - now on the left */}
      <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
        <img
          src={sunflower}
          alt="Profile"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover shadow-lg"
        />
      </div>

      {/* Text Section - now on the right */}
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <p className="text-lg sm:text-xl text-gray-600">Hello, I&apos;m</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          Kaushal Neupane
        </h1>
        <h2 className="text-2xl sm:text-3xl text-blue-600 font-semibold">
          Full Stack Developer
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start mt-4 space-x-6 text-3xl">
          <a
            href="https://www.instagram.com/kaushal_1000?gsh=b3lhdHRrb29lcng0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition duration-200" />
          </a>
          <a
            href="https://github.com/NebulaNook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-gray-700 transition duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
