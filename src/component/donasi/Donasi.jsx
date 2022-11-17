import React from 'react'
import './donasi.css'
import donasi1 from "./img/donasi1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Donasi = () => {
  return (
    <div className='donasi'>
        <div className='donasijudul'>
          <p className='judul'>Need to help</p> <button className='btn btn-outline-dark'>  See all <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
        </div>
        <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <div className='scroll'>
        <div className='carddonasi'>
          <div className='time'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 15 Day Left</div>
    <div className='contentdonasi'>
      <img src={donasi1 } />
      <div className='textdonasi'>
        <div className='content'>
          <p className='text1'>Lifeskills for children in Papua</p>
          <p className='text2'> By kitabisa.com  </p>
          <p className='text2'>Rp. 5.000.000 Raised</p>
          </div>
      </div>
    </div>
        </div>
        <div className='carddonasi'>
          <div className='time'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 15 Day Left</div>
    <div className='contentdonasi'>
      <img src={donasi1} />
      <div className='textdonasi'>
        <div className='content'>
          <p className='text1'>Lifeskills for children in Papua</p>
          <p className='text2'> By kitabisa.com  </p>
          <p className='text2'>Rp. 5.000.000 Raised</p>
          </div>
      </div>
    </div>
        </div>
        </div>
        </Swiper>
    </div>
  )
}

export default Donasi;
