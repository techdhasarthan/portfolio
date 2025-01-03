import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-14">
      <div className="md:container px-5">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            className="text-5xl font-bold text-purple-400 mb-4"
            data-aos="fade-down">
            {Hireme.title}
          </h2>
          <h4
            className="text-lg text-gray-300"
            data-aos="fade-down"
            data-aos-delay="200">
            {Hireme.subtitle}
          </h4>
        </div>

        {/* Content Section */}
        <div className="flex items-center md:flex-row flex-col-reverse gap-10">
          {/* Left Side Image for Desktop */}
          <img
            src={Hireme.image1}
            alt="Hire Me"
            data-aos="fade-right"
            className="hidden md:block max-w-sm rounded-lg  transition-all duration-300 transform hover:scale-105"
          />

          {/* Right Side Content */}
          <div
            data-aos="fade-left"
            className="bg-gradient-to-r from-gray-800 to-gray-900 border border-purple-500 max-w-sm p-6 shadow-lg rounded-xl rounded-br-[6rem] sm:min-w-[22rem] transition-all duration-300">
            <p className="leading-7 text-gray-300 text-justify mb-5">
              {Hireme.para}
            </p>
            <button className="btn bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-all duration-300">
              {Hireme.btnText}
            </button>
          </div>

          {/* Right Side Image for Mobile */}
          <img
            src={Hireme.image2}
            alt="Hire Me"
            data-aos="fade-up"
            className="block md:hidden max-w-sm rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
