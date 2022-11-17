import React from 'react'
import './komunitas.css'
import komunitas1 from "./img/komunitas1.png"
import komunitas2 from "./img/komunitas2.png"
import komunitas3 from "./img/komunitas3.png"
import komunitas4 from "./img/komunitas4.png"
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Kominitas = () => {
  return (
    <div className='komunitas'>
      <p className='judul'>Komunitas</p>
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >     
    <div>
      <SwiperSlide><div className="card">
          <div className="card-body">
          <img  src={komunitas1} />
            <h3 className="card-title">Pejuang Anti Rasis Jakarta</h3>
            <p  className="card-text">1200 members</p>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <div className="card-body">
          <img src={komunitas2} />
            <h3 className="card-title">PT. Anti Rasisme (PATR)</h3>
            <p  className="card-text">562 members</p>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <div className="card-body">
          <img src={komunitas4} />
            <h3 className="card-title">NO ROOM FOR RACISM</h3>
            <p  className="card-text">1432 members</p>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="card">
          <div className="card-body">
          <img src={komunitas3} />
            <h3 className="card-title">One Human Race</h3>
            <p  className="card-text">239 members</p>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="card">
          <div className="card-body">
          <img src={komunitas1} />
            <h3 className="card-title">Kita Sama</h3>
            <p  className="card-text">724 members</p>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="card m-3">
          <div className="card-body">
          <img src={komunitas1} />  
            <h3 className="card-title">Peace for Racism</h3>
            <p  className="card-text">384 members</p>
            <button className='btn btn-primary'>Join</button>
          </div>
        </div></SwiperSlide>
        
        </div>
    </Swiper>
    </div>
  )
}

export default Kominitas;
