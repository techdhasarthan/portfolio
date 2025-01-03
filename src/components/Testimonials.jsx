import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-14">
      <div className="md:container px-5">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            className="text-5xl font-bold mb-4 text-purple-400"
            data-aos="fade-down">
            {Testimonials.title}
          </h2>
          <h4
            className="text-lg text-gray-300"
            data-aos="fade-down"
            data-aos-delay="200">
            {Testimonials.subtitle}
          </h4>
        </div>

        {/* Swiper Component */}
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.5}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="h-[40rem] max-w-3xl mx-auto">
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`duration-500 p-8 h-full rounded-2xl flex items-center gap-6 border-2 
                  bg-gradient-to-r from-gray-800 to-gray-900 border-purple-500 shadow-lg transition-all transform 
                  ${
                    activeIndex === i
                      ? "scale-100 blur-none opacity-100"
                      : "scale-90 blur-sm opacity-50"
                  }`}>
                {/* Testimonial Image */}
                <img
                  src={content.img}
                  alt="..."
                  className="h-24 w-24 rounded-full object-cover border-4 border-purple-500 shadow-md"
                />

                {/* Testimonial Content */}
                <div>
                  <p className="text-base text-gray-300 italic leading-relaxed">
                    "{content.review}"
                  </p>
                  <br />
                  <h6 className="text-xl font-semibold text-purple-400">
                    {content.name}
                  </h6>
                  <p className="text-sm text-gray-400">{content.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
