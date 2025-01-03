import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-14"
      id="projects">
      <div className="md:container px-5 min-h-screen flex flex-col justify-between">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            className="text-5xl font-bold mb-4 text-[#4f95d0]"
            data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4
            className="text-lg text-gray-300"
            data-aos="fade-down"
            data-aos-delay="200">
            {Projects.subtitle}
          </h4>
        </div>

        {/* Content Section */}
        <div className="flex items-center lg:flex-row flex-col-reverse gap-10">
          {/* Left-Side Image */}
          <img
            src={Projects.image}
            alt="Projects Visual"
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] rounded-lg  transition-all duration-300 transform hover:scale-105"
          />

          {/* Swiper Component */}
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // Keeps autoplay active after user interaction
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]} // Ensure both Pagination and Autoplay are included here
            data-aos="fade-left"
            className="rounded-xl pb-16 max-w-lg drop-shadow-lg bg-gradient-to-b from-gray-800 to-gray-900">
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-gray-800 rounded-xl p-5 border-t-4 border-[#b8cdf5] h-[550px] flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div>
                  {/* Project Image */}
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />

                  {/* Project Title */}
                  <h5 className="mt-5 text-2xl font-semibold text-[#526b99]">
                    {content.title}
                  </h5>

                  {/* Project Description */}
                  <p className="text-sm text-gray-400 mt-3">
                    {content.description ||
                      "Explore the details of this amazing project!"}
                  </p>
                </div>

                {/* Read More Button */}
                <button className="mt-auto bg-[#7ca0e3] text-white px-6 py-3 rounded-lg hover:bg-[#b8cdf5] transition-all duration-300">
                  READ MORE
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
