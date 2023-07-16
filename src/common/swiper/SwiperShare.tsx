"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiGooglecolab } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-flip";

import { EffectFlip, Autoplay } from "swiper/modules";

export default function SwiperTools() {
  return (
    <div className="w-14 h-auto">
      <Swiper
        effect={"flip"}
        grabCursor={false}
        modules={[EffectFlip, Autoplay]}
        flipEffect={{ slideShadows: false }}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <BsDiscord size="100%" color="#7584E3" />
        </SwiperSlide>
        <SwiperSlide>
          <SiGooglecolab size="100%" color="#F8D263" />
        </SwiperSlide>
        <SwiperSlide>
          <FaGithub size="100%" color="black" />
        </SwiperSlide>
        <SwiperSlide>
          <FaGitlab size="100%" color="#F8B663" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
