import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
export default function SkillsLoop({skills,reversed}) {
  return (
    <div>
                  <Swiper
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                freeMode={true}
                allowTouchMove={false}
                speed={4000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection :reversed
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <div className="skill-card">
                            <img src={skill.url} alt={skill.name} className="skill-image" />
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    </div>
  )
}
