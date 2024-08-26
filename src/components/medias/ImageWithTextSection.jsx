import Img1 from "../../assets/JAX.jpeg";
import Img2 from "../../assets/JAX2.jpeg";
import Img3 from "../../assets/JAX3.jpeg";
function ImageWithTextSection() {
  const items = [
    {
      imgSrc: Img1,
      title: "Image Title 1",
      description: "This is a description of the first image.",
    },
    {
      imgSrc: Img2,
      title: "Image Title 2",
      description: "This is a description of the second image.",
    },
    {
      imgSrc: Img3,
      title: "Image Title 3",
      description: "This is a description of the third image.",
    },
  ];

  return (
    <section className="w-full h-full bg-secondary dark:bg-gray-900 dark:text-white py-12">
      <div className="container mx-auto space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center space-y-6 md:space-y-0 md:space-x-8`}
          >
            <div className="md:w-1/2">
              <img
                src={item.imgSrc}
                className="w-1/2 h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                alt={item.title}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageWithTextSection;
