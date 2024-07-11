'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Slider = () => {

    const images = [
        "https://images.wallpaperscraft.com/image/single/plant_macro_green_1266211_1280x720.jpg",
        "https://images.wallpaperscraft.com/image/single/river_meadows_trees_1266195_1920x1200.jpg",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            {images.map((pic, i) => {
                return (
                    <SwiperSlide key={i} className="w-full h-144 overflow-hidden relative">
                        <img className="w-full object-fill h-144 " src={pic} alt="" />
                        <div className="absolute flex items-center justify-center inset-0 bg-white/30">
                            <div className="flex flex-col justify-center items-center gap-4 bg-white/50 shadow-xl p-8 rounded-lg">
                                <h1 className="text-6xl text-sky-600">Salam</h1>
                                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veniam.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}

export default Slider