import { Link } from "react-router-dom";
import personImg from "../../assets/MAIN.jpg";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 gap-3 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">HI</p>
              <p className="text-2xl md:text-4xl font-bold text-black/80 dark:text-white">
                I&apos;m a
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Performing Artist & <br /> Content Creator
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                Emmanuel Adetoye is a trailblazing international performing
                artist, visual artist, and creative artist, dedicated to
                harnessing the power of art to make a profound impact on the
                world. Guided by his watchword, &ldquo;Creativity towards
                positive change&rdquo;.
              </p>
              <Link to="contact" className="inline-block primary-btn !my-3">
                Contact Me
              </Link>
            </div>
          </div>
          {/* Image section */}
          <div className="flex justify-center sm:justify-end">
            <img
              src={personImg}
              loading="lazy"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md h-auto rounded-lg object-cover"
              alt="Emmanuel Adetoye"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
