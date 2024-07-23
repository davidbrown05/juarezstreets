import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import GeneralList from "../constant/GeneralList";
import { Card } from "../components/Card";

export const SwiperRestaurants = () => {
  return (
    <div className=" w-full h-[400px] md:h-[600px] p-4 ">
      <Swiper
        className="mx-auto w-full lg:w-[1000] h-[400px] md:h-[550px] mb-24  flex items-start "
        slidesPerView={"auto"}
        spaceBetween={2}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {GeneralList.restaurantList.map((item, index) => (
          <SwiperSlide
            key={index}
            className=" flex w-[350px] md:w-[400px] justify-items-start"
          >
            <Card title={item.name} logo={item.logo} cover={item.cover}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
