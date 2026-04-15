import { Swiper, SwiperSlide } from "swiper/react";
import { SliderTech } from "../../mockData/data";

import 'swiper/css';

import { Autoplay } from "swiper/modules";

export default function Slider() {

    return (
        <div className=" py-6 px-10 rounded-xl
            border border-background-200/30 
            dark:border-background-100/20 
            bg-background-200/20 backdrop-blur-sm"
        >
            <Swiper
            spaceBetween={50}    
            slidesPerView={6}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            allowTouchMove={false}
            speed={3500}
            modules={[Autoplay]}
            breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
            }}
            className="w-full "
        >
            {
                SliderTech.map((items) => (
                    <SwiperSlide 
                        key={items.id}
                        className="w-26"
                    >
                        <div
                            className="flex flex-col items-center justify-center gap-2"
                        >
                            <items.img className="w-16 h-16" />
                            <p className="text-background-200/80 dark:text-background-100/70 text-2xl font-bold">{items.nome}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}