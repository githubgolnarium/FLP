'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Md10K } from 'react-icons/md';

const CustomerSlider = () => {



    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={16}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex items-center justify-center">
                    <div className='flex items-center justify-center size-24'>
                        <Md10K className='block text-[6vw]'></Md10K>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default CustomerSlider