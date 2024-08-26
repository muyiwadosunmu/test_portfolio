import personImg from "../../assets/JAX.jpeg";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 gap-3 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">HI</p>
              <p className="text-2xl md:text-4xl font-bold text-black/80 dark:text-white">
                I&apos;m a
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Performing Artist & <br /> Content Creator
              </p>
              <p className="text-black/75 dark:text-white/70 text-center  text-wrap sm:text-left">
                Emmanuel Adetoye is a trailblazing international performing
                artist, visual artist, and creative artist, dedicated to
                harnessing the power of art to make a profound impact on the
                world. Guided by his watchword, &ldquo;Creativity towards
                positive change&rdquo;.
              </p>
              <a
                href="mailto:michle@test.com"
                className="inline-block primary-btn !my-3"
              >
                Contact Me
              </a>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div>
            <img
              src={personImg}
              className="w-full rounded-lg md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
