import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-800 dark:text-white py-12"
    >
      <div className="container md:w-[70%] mx-auto">
        <div className="grid items-center gap-8 grid-cols-1 sm:grid-cols-2">
          <div className="font-bold relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              CONNECT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              With me
            </h1>
          </div>
          <div className="text-slate-500 space-y-6">
            <div className="space-y-4">
              <Link
                to="https://www.instagram.com/emmyjakx?igsh=MWFuZmY2eWppYzVnZg%3D%3D&utm_source=qr"
                className="cursor-pointer flex items-center space-x-2  hover:text-blue-500 dark:hover:text-blue-300 transform transition-all duration-300 hover:scale-105"
              >
                <FaInstagram className="text-xl" />
                <span className="font-semibold">Instagram:</span>
                <span>@emmyjakx</span>
              </Link>
              <Link className="flex cursor-pointer items-center space-x-2 hover:text-blue-500 dark:hover:text-blue-300 transform transition-all duration-300 hover:scale-105">
                <FaPhone className="text-xl" />
                <span className="font-semibold">Number:</span>
                <span>+447918778733</span>
              </Link>
              <Link
                to="https://www.facebook.com/emmanuel.adetoye.3"
                className="flex items-center cursor-pointer space-x-2 hover:text-blue-500 dark:hover:text-blue-300 transform transition-all duration-300 hover:scale-105"
              >
                <FaFacebook className="text-xl" />
                <span className="font-semibold">Facebook:</span>
                <span>Emmanuel Adetoye (EmmyJax)</span>
              </Link>
              <Link
                to="https://youtube.com/@jax-nation?si=ytQoQCi-0hinqvj3"
                className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-300 transform transition-all duration-300 hover:scale-105"
              >
                <FaYoutube className="text-xl" />
                <span className="font-semibold">YouTube:</span>
                <span>Jax Nation</span>
              </Link>
              <Link
                to="https://x.com/officialemmyjax"
                className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-300 transform transition-all duration-300 hover:scale-105"
              >
                <FaTwitter className="text-xl" />
                <span className="font-semibold">Twitter:</span>
                <span>@officialemmyjax</span>
              </Link>
            </div>
            <div className="mt-6">
              <a
                href="../../assets/Emmanuel_Adetoye_Dance_CV.docx"
                className="primary-btn hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
