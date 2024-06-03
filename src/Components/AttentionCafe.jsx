import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const AttentionCafe = () => {
    return (
        <div className='mb-5 md:mt-5 lg:mt-5 '>
       <div className='text-center space-y-5 p-3 md:mb-5'>
           <h3 className='text-1xl  text-orange-600'>Foods</h3>
            <h2 className='text-bold font-bold text-3xl'>Attention Cafe</h2>
            <p className='text-pretty'>A community studio is a versatile and inclusive space designed to serve and support the needs of a local community. We have a beautiful cafe</p>
            
           </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://t3.ftcdn.net/jpg/03/06/10/94/240_F_306109444_RTZ5AeYXUFjpelpOhSdermxFygLUAIJS.jpg" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://t3.ftcdn.net/jpg/01/28/52/18/240_F_128521888_fmzQgeBbrnCpAS7A4wKPKbu0VDikCeBh.jpg" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://media.istockphoto.com/id/959584318/photo/making-dinner-into-a-masterpiece.jpg?s=612x612&w=0&k=20&c=5sadZdufW-4j_ZmV3XM8KSZXRFcYRD-Nmh0vqTkIS7Y=" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://media.gettyimages.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=gi&k=20&c=JCgsPTxGNbSGX8MORHOXvtxMTtjavR49gjVSBTM52CI=" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://media.istockphoto.com/id/1436956975/photo/chef-pouring-special-sauce-on-pork-ribs-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=_epAf-Hm8uA_mZ3Kfeq_ki5_g4AlrJBEYEpYjk1aSe4=" alt=""  /></SwiperSlide>
          <SwiperSlide><img src="https://img.freepik.com/free-photo/professional-chef-preparing-food-kitchen_23-2149728018.jpg" alt=""  /></SwiperSlide>
          
        </Swiper>
      </div>
    );
};

export default AttentionCafe;