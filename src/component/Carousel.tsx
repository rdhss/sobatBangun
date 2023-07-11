import { FC } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import next from '@/assets/images/next.png'
import prev from '@/assets/images/prev.png'
import Image from "next/image";
import homeC from "@/assets/images/house-corousel.png";
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel: FC<{
   loop? : boolean
  }> = ({ loop }) => {
    return (
      <div className="relative ">

      <div className="swiper-button image-swiper-button-next absolute top-[50%] right-7 z-40">
          <Image src={next} alt="next"/>
      </div>
      <div className="swiper-button image-swiper-button-prev absolute top-[50%] left-7 z-40">
          <Image src={prev} alt="prev"/>
      </div>
        <Swiper loop={loop} navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Image src={homeC} alt="home" className="w-full" /></SwiperSlide>
        <SwiperSlide><Image src={homeC} alt="home" className="w-full" /></SwiperSlide>
        <SwiperSlide><Image src={homeC} alt="home" className="w-full" /></SwiperSlide>
        <SwiperSlide><Image src={homeC} alt="home" className="w-full" /></SwiperSlide>
        <SwiperSlide><Image src={homeC} alt="home" className="w-full" /></SwiperSlide>
      </Swiper>

      </div>
    )
  }

export default Carousel