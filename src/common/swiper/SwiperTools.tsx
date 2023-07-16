"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiAdobecreativecloud, SiStrapi } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiBlender } from "react-icons/si";

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
          <SiNextdotjs size="100%" color="black" />
        </SwiperSlide>
        <SwiperSlide>
          <SiTailwindcss size="100%" color="rgb(6 182 212)" />
        </SwiperSlide>
        <SwiperSlide>
          <SiStrapi size="100%" color="#7D3BF8 " />
        </SwiperSlide>
        <SwiperSlide>
          <SiPandas size="100%" color="#0E2267" />
        </SwiperSlide>
        <SwiperSlide>
          <SiNumpy size="100%" color="#6795DC" />
        </SwiperSlide>
        <SwiperSlide>
          <SiAdobecreativecloud size="100%" color="red" />
        </SwiperSlide>
        <SwiperSlide>
          <SiUnity size="100%" color="rgb(148 163 184)" />
        </SwiperSlide>
        <SwiperSlide>
          <SiBlender size="100%" color="orange" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
